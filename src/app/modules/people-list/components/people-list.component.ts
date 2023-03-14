import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  // Nombres
  public names = [
    "Fernando",
    "Hernando",
    "Bernando",
    "Orlando"
  ];

  public namesFiltered: string[] = [];

  constructor() { }

  ngOnInit() {
    this.namesFiltered = [...this.names];
  }
  
  // Filtro de nombres
  filter($event: string){
    this.namesFiltered = this.names.filter(n => n.toLowerCase().includes($event.toLowerCase()));
  }

}
