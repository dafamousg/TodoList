import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

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
    todo.completed = !this.todo.completed
    console.log("toggled");
    
  }

  //Deletes Todos
  onDelete(todo) {
    console.log("Deleted");
    
  }

}
