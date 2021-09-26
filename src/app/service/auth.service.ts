import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn(){
    return !!localStorage.getItem('token')
  } 

  logout(){
    localStorage.removeItem('token')
    localStorage.clear()
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
