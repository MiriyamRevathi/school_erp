import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Map<string, Cat> = new Map();

  constructor() {
    // Seed initial mock cats
    this.seed();
  }

  private seed() {
    const initialCats: Partial<Cat>[] = [
      { id: '11111111-1111-1111-1111-111111111111', name: 'Milo', breed: 'Persian', age: 3 },
      { id: '22222222-2222-2222-2222-222222222222', name: 'Luna', breed: 'Siamese', age: 2 },
      { id: '33333333-3333-3333-3333-333333333333', name: 'Oliver', breed: 'Maine Coon', age: 4 },
    ];

    for (const catData of initialCats) {
      const cat = new Cat(catData);
      this.cats.set(cat.id, cat);
    }
  }

  async create(dto: CreateCatDto): Promise<Cat> {
    const cat = new Cat({
      name: dto.name,
      breed: dto.breed ?? null,
      age: dto.age ?? null,
    });
    this.cats.set(cat.id, cat);
    return cat;
  }

  async findAll(): Promise<Cat[]> {
    return Array.from(this.cats.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  }

  async findOne(id: string): Promise<Cat> {
    const cat = this.cats.get(id);
    if (!cat) {
      throw new NotFoundException(`Cat with id "${id}" not found`);
    }
    return cat;
  }

  async update(id: string, dto: UpdateCatDto): Promise<Cat> {
    const cat = await this.findOne(id);
    if (dto.name !== undefined) cat.name = dto.name;
    if (dto.breed !== undefined) cat.breed = dto.breed || null;
    if (dto.age !== undefined) cat.age = dto.age ?? null;
    cat.updatedAt = new Date();
    this.cats.set(id, cat);
    return cat;
  }

  async remove(id: string): Promise<void> {
    const cat = await this.findOne(id);
    this.cats.delete(cat.id);
  }
}
