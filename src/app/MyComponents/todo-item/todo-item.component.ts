import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo; // This is an array of Todo objects
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  
  constructor() {
  }

  deleteTodo(todo: Todo){
    // INORDER TO DELETE A TODO WE NEED TO EMIT AN EVENT SO WE WILL USE EVENTEMITTER
    this.todoDelete.emit(todo);
    console.log("Delete this todo from todo items");
  }
}
