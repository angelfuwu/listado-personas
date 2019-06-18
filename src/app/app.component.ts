import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'listado de personas';
  
  constructor(private loginService:LoginService){}

  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyDOzpFeiWE6I227v9VWCt6Z68HsouNb5XU",
      authDomain: "listado-personas-b2135.firebaseapp.com"
    })
  }
  
  isAutenticado(){
    return this.loginService.isAuth();
  }

  salir(){
    this.loginService.logout();
  }
}
