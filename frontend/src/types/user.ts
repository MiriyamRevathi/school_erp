export type UserRole = 'Admin' | 'Teacher' | 'Student' | 'Parent' | 'Staff';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  status?: string;
}
