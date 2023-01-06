import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
// the TodosService contains a method to fetch the data
  constructor() { }
  url = "http://localhost:3000/todos"
  data;
  getTodos(){
    fetch(this.url).then(res=>res.json()).then(data=>{
    // the last item should be first on the display
      this.data = data.reverse()
    }).catch(err=>console.log(err))
    
    return this.data
  } 
}
