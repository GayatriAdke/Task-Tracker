import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../task';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }),

}




@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:50000/tasks';


  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    console.log("hello")
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }

  updateTaskRemainder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task>(url, task,httpOptions);
  }
  addTask(task:Task):Observable<Task>{
    return this.httpClient.post<Task>(this.apiUrl,task,httpOptions);
  }
}
