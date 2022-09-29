import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  @Output() sendTask = new EventEmitter()
  taskTitle: string = ""

  constructor() { }

  
  ngOnInit(): void {
  }

 setTitle(event:any) {
  this.taskTitle = event.target.value
 }

  sendTaskHandler() {
    this.sendTask.emit(this.taskTitle)
  }

  addTask() {

  }

}
