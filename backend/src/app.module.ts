import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configLoaders, envValidationSchema } from './config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { CatsModule } from './modules/cats/cats.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { StudentsModule } from './modules/students/students.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { ParentsModule } from './modules/parents/parents.module';
import { ClassesModule } from './modules/classes/classes.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { ExamsModule } from './modules/exams/exams.module';
import { ResultsModule } from './modules/results/results.module';
import { FeesModule } from './modules/fees/fees.module';
import { LibraryModule } from './modules/library/library.module';
import { TimetableModule } from './modules/timetable/timetable.module';
import { TransportModule } from './modules/transport/transport.module';
import { HostelModule } from './modules/hostel/hostel.module';
import { PayrollModule } from './modules/payroll/payroll.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { UsersModule } from './modules/users/users.module';
import { SupportModule } from './modules/support/support.module';

const nodeEnv = process.env.NODE_ENV ?? 'development';
const envFilePath = ['.env', `.env.${nodeEnv}`];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      validationSchema: envValidationSchema,
      load: configLoaders,
    }),
    DatabaseModule,
    AuthModule,
    CatsModule,
    TasksModule,
    StudentsModule,
    TeachersModule,
    ParentsModule,
    ClassesModule,
    AttendanceModule,
    ExamsModule,
    ResultsModule,
    FeesModule,
    LibraryModule,
    TimetableModule,
    TransportModule,
    HostelModule,
    PayrollModule,
    NotificationsModule,
    UsersModule,
    SupportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
