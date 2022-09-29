import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() taskTitle = ""
  classes = "task"
  constructor() { }

  ngOnInit(): void {
  }

  complete() {
    this.classes+=" completed"
  }

}
