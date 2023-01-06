import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  todos:any;
  constructor(private todosService: TodosService) {} 
  ngOnInit() {
    //this.todos = this.todosService.getTodos();
    
  }
}
