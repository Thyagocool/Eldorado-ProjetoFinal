import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private loginService: LoginService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  onSubmit(data){
    this.loginService.login(data).subscribe(
      success => console.log('sucesso'),
      error => {
        this.snackBar.open(error.error.mensagem, "X",
        {
          duration: 2 * 1000
        });
      },

      () =>console.log('request finalizado')
    )

  }

}
