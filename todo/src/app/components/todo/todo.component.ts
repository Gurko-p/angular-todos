import { Component } from '@angular/core';
import { TodoRepository } from 'src/app/models/Repositories/repository.model';
import { Todo } from 'src/app/models/Entities/todo.model';

@Component({
    selector: "todo",
    templateUrl: "todo.component.html",
    styleUrls: ["todo.component.css"]
})

export class TodoComponent{

    constructor(private repository: TodoRepository){
    }
    
    getTodosCount() : number {
        return this.repository.getTodos().length;
    }

    getTodos() : Todo[]{
        return this.repository.getTodos();
    }

    doneTodo(id: number): void{
        let todoFromDb = this.repository.getTodo(id);
        todoFromDb.done = !todoFromDb.done;
        this.repository.saveTodo(todoFromDb);
    }

    getTodosStatuses() : Object {
        let doneCount = this.getTodos().filter(t => t.done).length;
        const statuses = {
            done: doneCount,
            do: this.getTodos().length - doneCount
        }
        return statuses;
    }

    deleteTodo(id: number): void{
        if(id != null || id != 0){
            this.repository.deleteTodo(id);
        }
    }
 }