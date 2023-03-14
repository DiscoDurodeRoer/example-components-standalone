import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterComponent } from 'src/shared/components/filter/filter.component';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
  // este componente es independiente y no nos hace falta el modulo
  standalone: true,
  imports: [
    CommonModule,
    FilterComponent
  ]
})
export class AnimalsListComponent implements OnInit {

  // animales
  public animals = [
    "Gato",
    "Perro",
    "Pato",
    "Lagarto"
  ];

  public animalsFiltered: string[] = [];

  constructor() { }

  ngOnInit() {
    this.animalsFiltered = [...this.animals];
  }

  // Filtro de animales
  filter($event: string) {
    this.animalsFiltered = this.animals.filter(n => n.toLowerCase().includes($event.toLowerCase()));
  }

}
