import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { AccountComponent } from './components/account/account.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'}, 
    { path: 'home', component: HomeComponent }, 
    { path: 'movies', component: MoviesListComponent }, 
    { path: 'account', component: AccountComponent }

];
