import { Test, TestingModule } from '@nestjs/testing';
import { MovieRequestLogService } from './movie-request-log.service';

describe('MovieRequestLogService', () => {
  let service: MovieRequestLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieRequestLogService],
    }).compile();

    service = module.get<MovieRequestLogService>(MovieRequestLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
