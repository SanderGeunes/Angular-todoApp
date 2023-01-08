import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';



@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
  todos:any;
  data: any;
  constructor(private todosService: TodosService) {} 
  ngOnInit() {
    this.render()
  }
  
  render(){
    this.data = this.todosService.getTodos();
    this.todos = this.data.filter(item =>item.status === false);
    console.log(this.todos);
  }


  addTodo(input:string){
    const obj = {
      "title":input,
      "status": false
    }
    this.todosService.addTodo(obj);
    this.render();
  }

  deleteTodo(x){
    console.log(x)
    let id = x 
    this.todosService.deleteTodo(id);
    this.render();
  }

  updateTodo(x){
    console.log(x)
    let id = x
    this.todosService.updateTodo(id);
    this.render();
  }
}
