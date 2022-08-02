import { NgModule } from "@angular/core";
import { TodoRepository } from "./Repositories/repository.model";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource, REST_URL } from './rest.datasource';

@NgModule({
    imports:[HttpClientModule],
    providers: [TodoRepository, RestDataSource,
        { provide: REST_URL, useValue: `http://${location.hostname}:3500/todos` }]
})
export class ModelModule{}