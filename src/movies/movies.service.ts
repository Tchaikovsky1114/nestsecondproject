import { CreateMovieDTO } from './dto/create-movie.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies:Movie[] = [];

  getAll() : Movie[] {
    return this.movies
  }

  getOne(id:number): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    if(!movie) {
      throw new NotFoundException("찾으시는 영화가 없습니다.")
    }else{
      return movie
    }
  }

  deleteOne(id:number) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  create(movieData: CreateMovieDTO){
    return this.movies.push({
      id: this.movies.length + 1,
      ...movieData
    })
  }

  update(id:number, updateData:CreateMovieDTO) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({...movie,...updateData})
  }
}
