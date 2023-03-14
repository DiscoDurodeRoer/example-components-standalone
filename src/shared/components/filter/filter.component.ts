import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  // este componente es independiente y no nos hace falta sharedmodule
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FilterComponent {

  public name: string = '';

  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onFilter() {
    this.filter.emit(this.name);
  }

}
