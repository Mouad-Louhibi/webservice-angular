import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos:Array<Todo>;
  private url:string="http://localhost:3000/todos";
  constructor(private httpClient:HttpClient) { 
    this.httpClient.get<Array<Todo>>(this.url).subscribe(
   (res)=>{ 
     this.todos.push(...res)
   },
   (err)=>{console.log(err)},
   ()=>{console.log("fin")}
   );
    this.todos=new Array<Todo>();

  }
  public getTodos():Array<Todo>{
    return this.todos;
  }
  public addTodo(todo:Todo):void{
    this.httpClient.post<Todo>(this.url,todo).subscribe(
      (res)=>{this.todos.push(todo);},
      (err)=>alert("erreur"),
      ()=>console.log("fin de add")
    );
    
  }
}
