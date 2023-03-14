import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './modules/people-list/components/people-list.component';

export const routes: Routes = [
  { path: 'people-list', component: PeopleListComponent },
  // Lazy route con el componente standalone animals
  { path: 'animals-list', loadComponent: () => import('./modules/animals-list/components/animals-list.component').then(m => m.AnimalsListComponent) },
  { path: '**', redirectTo: 'people-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
