import { Component, ApplicationRef} from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";
import { TodoRepository } from "src/app/models/Repositories/repository.model";
import { Todo } from "../../models/Entities/todo.model";
import { TodoFormGroup, TodoFormControl } from "./form.model";

@Component({
  selector: "todo-form",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"],
})
export class FormComponent {
  public newTodo: Todo = new Todo();
  formGroup: TodoFormGroup = new TodoFormGroup();
  formSubmitted: boolean = false;

  constructor(private repository: TodoRepository) {}

  submitForm() {
    
    Object.keys(this.formGroup.controls).forEach(
      (c) => (this.newTodo[c] = this.formGroup.controls[c].value)
    );
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      this.repository.saveTodo(this.newTodo);
      this.newTodo = new Todo();
      this.formGroup.reset();
      this.formSubmitted = false;
    }
  }
}
