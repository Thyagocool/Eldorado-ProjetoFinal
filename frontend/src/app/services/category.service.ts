import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators';

import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API:string = 'http://localhost:3000/api/categories/'

  constructor(private httpClient:HttpClient) { }

  findAll(){
    return this.httpClient.get<any>(this.API)
    .pipe(
      tap(categories => console.log(categories))
    )
  }

  create(category:Category):Observable<Category>{
    console.log('categoria', category)

    return this.httpClient.post<Category>(this.API, category)
    .pipe(
      tap(categories => console.log(categories))
    );
  }
}
