import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators';

import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API:string = `${environment.API}categories`;

  constructor(private httpClient:HttpClient) { }

  findAll(){
    return this.httpClient.get<any>(this.API)
    .pipe(
      tap(categories => console.log(categories))
    )
  }

  create(category:Category):Observable<Category>{
    return this.httpClient.post<Category>(this.API, category)
    .pipe(
      tap(categories => console.log(categories))
    );
  }

  delete(id: number){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(
      tap(categories => console.log(categories))
    )
  }
}
