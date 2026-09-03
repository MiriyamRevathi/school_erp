import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TaskStatus } from './entities/task-status.enum';

@Injectable()
export class TasksRepository {
  private readonly tasks: Map<string, Task> = new Map();

  constructor() {
    this.seed();
  }

  private seed() {
    const initialTasks: Partial<Task>[] = [
      {
        id: '11111111-2222-3333-4444-555555555555',
        title: 'Review Grade 10 Science Curriculum',
        description: 'Complete quarterly review for Physics & Chemistry syllabus',
        status: TaskStatus.IN_PROGRESS,
        dueDate: new Date(Date.now() + 86400000 * 3),
      },
      {
        id: '22222222-3333-4444-5555-666666666666',
        title: 'Generate Term 1 Report Cards',
        description: 'Compile marks entry and verify grades across sections',
        status: TaskStatus.TODO,
        dueDate: new Date(Date.now() + 86400000 * 7),
      },
      {
        id: '33333333-4444-5555-6666-777777777777',
        title: 'Publish Annual Sports Day Notice',
        description: 'Send announcement to parents and staff',
        status: TaskStatus.DONE,
        dueDate: new Date(Date.now() - 86400000),
      },
    ];

    for (const taskData of initialTasks) {
      const task = new Task(taskData);
      this.tasks.set(task.id, task);
    }
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasks.get(id) ?? null;
  }

  async findAllOrdered(): Promise<Task[]> {
    return Array.from(this.tasks.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  }

  async save(entity: Task): Promise<Task> {
    entity.updatedAt = new Date();
    this.tasks.set(entity.id, entity);
    return entity;
  }

  async remove(entity: Task): Promise<void> {
    this.tasks.delete(entity.id);
  }

  create(partial: Partial<Task>): Task {
    return new Task(partial);
  }
}
