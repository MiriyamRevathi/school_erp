import { Controller, Post, Get, Body, HttpCode, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DEMO_USERS, AuthUser, RolesGuard } from './roles.guard';

@Injectable()
export class AuthService {
  async login(body: { email?: string; password?: string }) {
    const rawEmail = (body?.email || 'admin@schoolerp.local').toLowerCase().trim();

    let user: AuthUser | undefined = DEMO_USERS[rawEmail];

    if (!user) {
      // Check prefix or fallback
      if (rawEmail.includes('teacher')) {
        user = DEMO_USERS['teacher@schoolerp.local'];
      } else if (rawEmail.includes('student')) {
        user = DEMO_USERS['student@schoolerp.local'];
      } else if (rawEmail.includes('parent')) {
        user = DEMO_USERS['parent@schoolerp.local'];
      } else {
        user = DEMO_USERS['admin@schoolerp.local'];
      }
    }

    const token = `token-role-${user.role}-${user.id}-${Date.now()}`;

    return {
      accessToken: token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        linkedId: user.linkedId,
        avatar: user.avatar,
      },
    };
  }

  async getProfile(user?: AuthUser) {
    const active = user || DEMO_USERS['admin@schoolerp.local'];
    return {
      id: active.id,
      email: active.email,
      name: active.name,
      role: active.role,
      linkedId: active.linkedId,
      permissions:
        active.role === 'ADMIN'
          ? ['ALL']
          : active.role === 'TEACHER'
          ? ['ACADEMICS_MANAGE', 'ATTENDANCE_MARK', 'MARKS_ENTRY']
          : active.role === 'STUDENT'
          ? ['PORTAL_VIEW', 'MY_RESULTS', 'MY_ATTENDANCE']
          : ['CHILDREN_VIEW', 'PAY_FEES'],
      school: {
        id: 'sch-1',
        name: 'Greenwood International Academy',
        academicYear: '2025-2026',
      },
    };
  }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() body: { email?: string; password?: string }) {
    return this.authService.login(body);
  }

  @Get('profile')
  getProfile(@Req() req: any) {
    return this.authService.getProfile(req?.user);
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [AuthController],
  providers: [AuthService, RolesGuard],
  exports: [AuthService, RolesGuard],
})
export class AuthModule {}
