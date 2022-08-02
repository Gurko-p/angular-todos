import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [FormComponent],
    exports: [FormComponent]
})
export class FormModule{}
