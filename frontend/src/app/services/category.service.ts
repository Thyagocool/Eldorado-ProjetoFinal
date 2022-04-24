import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators';

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
}
