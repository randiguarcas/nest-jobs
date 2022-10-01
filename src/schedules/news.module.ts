import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { NewsSchedule } from './news.schedule';
import { SyncService } from './sync.service';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  providers: [SyncService, NewsSchedule],
})
export class NewsModule {}
