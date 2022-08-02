import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations: [TodoComponent],
    exports: [TodoComponent]
})
export class TodoModule{}