import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'todo';
  taskTitle = ""
  tasks:string[] = ["Task1"]
  addTask(str:any) {
    this.tasks.push(str)
  }
}
