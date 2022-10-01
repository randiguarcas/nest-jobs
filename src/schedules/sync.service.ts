import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SyncService {
  private readonly baseApiUrl =
    process.env.API_BASE_URL || 'http://localhost:8080';
  private readonly logger = new Logger(SyncService.name);

  constructor(private httpService: HttpService) {}

  retrieveFromApi(): Promise<any> {
    return this.httpService.axiosRef.get(
      `${this.baseApiUrl}/v1/search_by_date?query=nodejs`,
    );
  }

  async get() {
    const { data } = await this.retrieveFromApi();
    this.logger.debug(data);
  }
}
