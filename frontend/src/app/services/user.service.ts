import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API:string = `${environment.API}users`;

  constructor(private httpClient:HttpClient) { }

  findAll(){
    return this.httpClient.get<any>(this.API);
  }

  create(user:User):Observable<User>{
    return this.httpClient.post<User>(this.API, user);
  }

  update(id:string, user:User):Observable<User>{
    return this.httpClient.put<User>(`${this.API}/${id}`, user);
  }

  delete(id: number){
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
