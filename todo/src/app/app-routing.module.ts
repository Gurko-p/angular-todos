import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoRepository } from './models/Repositories/repository.model';


const routes: Routes = [
  { path: "todos", component: TodoRepository }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
