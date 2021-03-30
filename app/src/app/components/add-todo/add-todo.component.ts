import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  public form:FormGroup;
  constructor(private service:TodoService) { }

  ngOnInit() {
    this.form=new FormGroup({
      body:new FormControl('',Validators.required)
    })
  }
  public onSubmit():void{
    this.service.addTodo(new Todo(this.form.controls['body'].value));
    this.form.reset();
  }

}
