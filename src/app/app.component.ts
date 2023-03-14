import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PeopleListModule } from './modules/people-list/people-list.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // este componente es independiente y no hace falta app.module
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PeopleListModule
  ]
})
export class AppComponent {
  title = 'example-components-standalone';
}
