import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../movies.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { SearchDTO } from '../movies.model';
import { MovieCardComponent } from '../movie-card/movie-card.component';


@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MovieCardComponent],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movieSearch$ = new Subject<SearchDTO>();
  movies$: Observable<any>;

  form = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    type: new FormControl<string>(''),
  })

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies$ = this.movieSearch$.pipe(
      switchMap(value => this.moviesService.search(value)),
      map(result => result.Response === 'False' ? [] : result.Search)
    )
  }

  onSubmit() {
    if (!this.form.valid) { return }
    this.movieSearch$.next(this.form.value as SearchDTO)
  }
}
