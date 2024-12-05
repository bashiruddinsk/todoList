import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
[x: string]: any;
  constructor(private ts :TodoService){

  }

   
      todos: any;
      ngOnInit(): void{
        this.todos=this.ts.todoList;
      }

  
      remove(index:any)
      {
        this.ts.deleteToDo(index);
      }
 

}
