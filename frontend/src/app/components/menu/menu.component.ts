import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  login: string = '';

  constructor() { }

  ngOnInit(): void {
    this.login = localStorage.getItem('user')
  }

  logout(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

}
