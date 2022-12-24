import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

//한가지의 역할을 하는 앱 - module
@Module({
  imports: [],
  // URL을 가져오고 해당 함수를 실행한다. express의 router와 같은 역할을 한다.
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
