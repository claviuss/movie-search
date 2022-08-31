import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { MovieBase } from './movie-base.class';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent extends MovieBase implements OnInit {

  movie$: Observable<Movie | undefined>

  constructor() {
    super()
  }

  ngOnInit(): void {
    this.movie$ = this.route.paramMap.pipe(
      switchMap(param => {
        const imdbID = param.get('imdbID')
        if (imdbID) {
          return this.moviesService.findById(imdbID)
        } else {
          return of()
        }
      }),
      tap((result)=>{
        if(result.Response==='False'){
          this.router.navigate(['/search'])
        }
      }))
  }
}
