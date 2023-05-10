import { Component } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  todos: Todo[]; // This is an array of Todo objects
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title 1",
        desc: "This is description 1",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "This is description 2",
        active: true
      }
    ]
  }

  deleteTodo(todo: Todo){
    console.log("Delete this todo", todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
