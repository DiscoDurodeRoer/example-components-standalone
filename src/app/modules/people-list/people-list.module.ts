import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './components/people-list.component';
import { FilterComponent } from 'src/shared/components/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    // Standalone
    FilterComponent
  ],
  declarations: [
    PeopleListComponent
  ],
  exports: [
    PeopleListComponent
  ]
})
export class PeopleListModule { }
