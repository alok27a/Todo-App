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
    if (localStorage.getItem("todos") === null) {
      this.todos = [];
    } else {
      const todosString = localStorage.getItem("todos");
      this.todos = todosString ? JSON.parse(todosString) : [];
    }
  }


  deleteTodo(todo: Todo) {
    console.log("Delete this todo", todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo)
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
