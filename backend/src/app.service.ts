import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return `<h2> Welcome to the School ERP API! </h2> <p> Please check /info for more information. </p>`;
  }

  getInfo() {
    return {
      version: '1.0.0',
      name: 'School ERP API',
      description: 'A School ERP API built with NestJS and clean in-memory repositories',
      architecture: 'Schema-per-tenant (Local In-Memory)',
      stack: ['NestJS', 'In-Memory Repositories', 'TypeScript'],
      author: {
        name: 'Biprodas Roy',
        email: 'biprodas.cse@gmail.com'
      },
    };
  }
}
