import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {

  }

  //SEt Dynamic classes
  setClasses() {
    let classes = {
      todo:true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  //Toggle complete status of Todos
  onToggle(todo) {
    //Toggle in UI
    todo.completed = !this.todo.completed;

    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
        
  }

  //Deletes Todos
  onDelete(todo) {
    this.deleteTodo.emit(todo);
    
  }

}
