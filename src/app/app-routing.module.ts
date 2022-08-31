import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', title:'Movie Search', component: MovieSearchComponent },
  { path: 'movie/:imdbID', title:'Movie Information', loadComponent: () => import('./movie-info/movie-info.component').then(m => m.MovieInfoComponent) }
];

