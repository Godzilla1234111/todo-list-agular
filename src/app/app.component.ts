import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  todos: Todo[] = [];
  newTodo: string;

  //saves items added to the list 
  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert("please enter somthing")
    }
  }
  //togeling todo 
  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  //to temove items from the lsit

  remove(id:number){
    this.todos = this.todos.filter((v,i) => i !== id);

  }







}

