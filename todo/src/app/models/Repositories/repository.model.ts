import { Injectable } from "@angular/core";
import { Todo } from "../Entities/todo.model";
import { RestDataSource } from "../rest.datasource";
import { Observable } from "rxjs";

@Injectable()
export class TodoRepository {
  private todos: Todo[] = new Array<Todo>();
  private locator = (p: Todo, id: number) => p.id == id;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getData().subscribe(data => this.todos = data);
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: number): Todo {
    return this.todos.find((p) => this.locator(p, id));
  }

  saveTodo(todo: Todo) {
    if (todo.id == 0 || todo.id == null) {
      this.dataSource.saveProduct(todo)
      .subscribe((p) => this.todos.push(p));
    } else {
      this.dataSource.updateProduct(todo).subscribe((p) => {
        let index = this.todos.findIndex((item) => this.locator(item, p.id));
        this.todos.splice(index, 1, p);
      });
    }
  }
  deleteTodo(id: number) {
    this.dataSource.deleteProduct(id).subscribe(() => {
      let index = this.todos.findIndex((p) => this.locator(p, id));
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    });
  }
}
