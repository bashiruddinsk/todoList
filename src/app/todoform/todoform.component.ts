import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {

  todoinput='';

    constructor(private ts:TodoService){}

reset() {
    this.todoinput='';
}
addTask() { 
      this.ts.addTodo(this.todoinput);
}

}
