import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API:string = 'http://localhost:3000/api/users/login';
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(data){
    return this.httpClient.post<Auth>(this.API, data)
    .pipe(
      tap(user => {
        if(user.token){
          localStorage.setItem("token", user.token)
          localStorage.setItem("user", user.usuario.login)
          this.router.navigate(['/home'])
        }
      })
    )
  }
}

