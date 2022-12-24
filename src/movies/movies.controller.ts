import { CreateMovieDTO } from './dto/create-movie.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// Controll의 실행문 내부의 문자열은 URL의 EntryPoint를 컨트롤한다.
@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}
  
  @Get()
  getAll():Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData:CreateMovieDTO) {
    return this.moviesService.update(movieId,updateData)
  }
}
