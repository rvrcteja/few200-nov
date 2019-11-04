import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: TodoItem[] = [
    { id: '1', description: 'Take down halloween decorations', completed: false },
    { id: '2', description: 'Rake leaves', completed: true }
  ];
  constructor() { }

  ngOnInit() {
  }

}
