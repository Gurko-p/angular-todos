import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../models/Entities/todo.model";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
  constructor(
    private http: HttpClient,
    @Inject(REST_URL) private url: string
  ) {}
  getData(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
  saveProduct(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }
  updateProduct(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo);
  }
  deleteProduct(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url}/${id}`);
  }
}
