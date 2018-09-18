import { Test, TestingModule } from '@nestjs/testing';
import { Cats.Providers } from './cats.providers';

describe('Cats.Providers', () => {
  let provider: Cats.Providers;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cats.Providers],
    }).compile();
    provider = module.get<Cats.Providers>(Cats.Providers);
  });
  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
