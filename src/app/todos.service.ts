import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
// the TodosService contains a method to fetch the data
  constructor() { }
  url = "http://localhost:3000/todos"
  data;
  
  
  
  fetchTodos(){
    fetch(this.url).then(res=>res.json()).then(data=>{
      // the last item should be first on the display
        let x = data.reverse()
        this.data = x
      }).catch(err=>console.log(err))
      
  }
 

  getTodos(){
    this.fetchTodos();
    return this.data
  }
  
  addTodo = (obj) => {
    fetch(this.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then(
        res => res.json()
    ).then(this.getTodos()).catch(err=>console.log(err));
  }
  
  deleteTodo(id:number) {
    fetch(this.url + '/' + id, {
        method: 'DELETE'
    }).then(res => res.json()).then(this.getTodos()).catch(err=>console.log(err));
  } 
  updateTodo(id:number){
    fetch(this.url + '/' + id, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          status: true
      })
  }).then(res => res.json()).then(this.getTodos()).catch(err=>console.log(err));
  }
  
  resetTodo(id:number){
    fetch(this.url + '/' + id, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          status: false
      })
  }).then(res => res.json()).then(this.getTodos()).catch(err=>console.log(err));
  }

}
