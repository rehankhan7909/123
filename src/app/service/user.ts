import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interface/User';

@Injectable({
  providedIn: 'root',
})
export class Userservice {


  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    const url = "http://localhost:3000/users";
    return this.http.get<User[]>(url);
  }

  // post method

  saveUser(user: User): Observable<User> {
    const url = "http://localhost:3000/users";
    return this.http.post<User>(url, user);
  }


  // delete 

  deleteUser(id: string): Observable<User> {
    const url = "http://localhost:3000/users";
    return this.http.delete<User>(url + "/" + id)
  }
}
