import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {User} from '../models/user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  addUser(user:User) : Observable<User> {
    return <Observable<User>> this.http.post(this.usersUrl + "/add", user)
  }

  deleteUser(email:string) : Observable<User> {
    return <Observable<User>> this.http.delete(this.usersUrl + "/delete/" + email)
  }

  updateUser(user:User) : Observable<User> {
    return <Observable<User>> this.http.put(this.usersUrl + "/update", user)
  }

  getUser(email:string) : Observable<User> {
    return this.http.get<User>(this.usersUrl + "/get/" + email)
  }

  login(e:string, p:string) : Observable<any>{
    return this.http.post(this.usersUrl + "/login", {email:e, password:p})
  }
}
