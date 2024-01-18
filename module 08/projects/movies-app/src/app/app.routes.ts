import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { AccountComponent } from './components/account/account.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'}, 
    { path: 'home', component: HomeComponent }, 
    { path: 'movies', component: MoviesListComponent }, 
    { path: 'movies/:index', component: MovieDetailsComponent},
    { path: 'account', component: AccountComponent }

];
