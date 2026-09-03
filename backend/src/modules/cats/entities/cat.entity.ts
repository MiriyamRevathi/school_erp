import { randomUUID } from 'crypto';

export class Cat {
  id: string = randomUUID();
  name: string;
  breed: string | null = null;
  age: number | null = null;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(partial?: Partial<Cat>) {
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
