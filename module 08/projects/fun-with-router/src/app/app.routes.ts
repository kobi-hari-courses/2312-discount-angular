import { Routes } from '@angular/router';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'page-a', pathMatch: 'full'},
    { path: 'page-a', component: PageAComponent}, 
    { path: 'page-b', component: PageBComponent}, 
    { path: 'page-c', component: PageCComponent}, 
    { path: '**', component: NotFoundComponent}
];
