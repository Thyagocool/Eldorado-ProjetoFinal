import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Auth } from '../../models/auth';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Observable <Auth[]>;

  hide = true;

  login:string = '';
  password:string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log(this.login)

  }

  onSubmit(data){
    this.loginService.login(data).subscribe(
      success => console.log('sucesso'),
      error => console.error(error),
      () =>console.log('request finalizado')
    )

  }

}
