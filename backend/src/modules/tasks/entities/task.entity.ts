import { randomUUID } from 'crypto';
import { TaskStatus } from './task-status.enum';

export class Task {
  id: string = randomUUID();
  title: string;
  description: string | null = null;
  status: TaskStatus = TaskStatus.TODO;
  dueDate: Date | null = null;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(partial?: Partial<Task>) {
    if (partial) {
      Object.assign(this, partial);
      if (!this.id) {
        this.id = randomUUID();
      }
      if (!this.createdAt) {
        this.createdAt = new Date();
      }
      if (!this.updatedAt) {
        this.updatedAt = new Date();
      }
    }
  }
}
