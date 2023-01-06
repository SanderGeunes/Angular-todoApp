import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
  todos:any;
  constructor(private todosService: TodosService) {} 
  ngOnInit() {
    this.todos = this.todosService.getTodos();
    console.log(this.todos)
    
  }
}
