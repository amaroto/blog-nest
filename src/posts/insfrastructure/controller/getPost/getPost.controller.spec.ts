import { Test, TestingModule } from '@nestjs/testing';
import { GetPostController } from './getPost.controller';

describe('GetPostController', () => {
  let controller: GetPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetPostController],
    }).compile();

    controller = module.get<GetPostController>(GetPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
