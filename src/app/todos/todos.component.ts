import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
