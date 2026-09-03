import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Role } from './roles.decorator';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  linkedId?: string; // studentId, teacherId, or parentId
  avatar?: string;
}

export const DEMO_USERS: Record<string, AuthUser> = {
  'admin@schoolerp.local': {
    id: 'usr-admin-1',
    email: 'admin@schoolerp.local',
    name: 'Dr. Arthur Mitchell',
    role: 'ADMIN',
    avatar: '/avatars/admin.png',
  },
  'teacher@schoolerp.local': {
    id: 'usr-teacher-1',
    email: 'teacher@schoolerp.local',
    name: 'Sarah Jenkins',
    role: 'TEACHER',
    linkedId: 'tch-1',
    avatar: '/avatars/teacher.png',
  },
  'student@schoolerp.local': {
    id: 'usr-student-1',
    email: 'student@schoolerp.local',
    name: 'Liam Davis',
    role: 'STUDENT',
    linkedId: 'stu-1',
    avatar: '/avatars/student.png',
  },
  'parent@schoolerp.local': {
    id: 'usr-parent-1',
    email: 'parent@schoolerp.local',
    name: 'Robert Davis',
    role: 'PARENT',
    linkedId: 'par-1',
    avatar: '/avatars/parent.png',
  },
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // No roles required, allow access
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'] || '';

    let user: AuthUser | null = null;

    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      // Format: token-<role>-<timestamp> or encoded email
      if (token.includes('role-ADMIN') || token.includes('usr-admin')) {
        user = DEMO_USERS['admin@schoolerp.local'];
      } else if (token.includes('role-TEACHER') || token.includes('usr-teacher')) {
        user = DEMO_USERS['teacher@schoolerp.local'];
      } else if (token.includes('role-STUDENT') || token.includes('usr-student')) {
        user = DEMO_USERS['student@schoolerp.local'];
      } else if (token.includes('role-PARENT') || token.includes('usr-parent')) {
        user = DEMO_USERS['parent@schoolerp.local'];
      } else {
        // Find by decoded email or fallback
        for (const u of Object.values(DEMO_USERS)) {
          if (token.toLowerCase().includes(u.email.toLowerCase()) || token.toLowerCase().includes(u.role.toLowerCase())) {
            user = u;
            break;
          }
        }
      }
    }

    // Default to ADMIN for dev fallback if no token provided, but enforce if explicit token is provided
    if (!user) {
      if (authHeader) {
        throw new UnauthorizedException('Invalid or expired authentication token');
      }
      user = DEMO_USERS['admin@schoolerp.local'];
    }

    request.user = user;

    const hasRole = requiredRoles.includes(user.role);
    if (!hasRole) {
      throw new ForbiddenException(
        `Access denied. Role "${user.role}" does not have permission to access this resource. Required: [${requiredRoles.join(', ')}]`,
      );
    }

    return true;
  }
}
