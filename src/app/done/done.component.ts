import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  todos:any;
  data:any;
  constructor(private todosService: TodosService) {} 
  ngOnInit() {
    this.render();
  }
  render(){
    this.data = this.todosService.getTodos();
    this.todos = this.data.filter(item =>item.status === true);
    
  }


  resetTodo(x){
    let id= x
    this.todosService.resetTodo(id)
    this.render();
  }

}
