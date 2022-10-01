import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SyncService } from './sync.service';

@Injectable()
export class NewsSchedule {
  constructor(private syncService: SyncService) {}

  @Cron(CronExpression.EVERY_30_SECONDS, { name: 'sync_news' })
  handleCron() {
    this.syncService.get();
  }
}
