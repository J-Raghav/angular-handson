import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getAllUsers(){
    let usersObs = this.http.get<any>('https://reqres.in/api/users?page=2');
    return usersObs;
  }

  createUser(user: User){
    return this.http.post<User>("https://reqres.in/api/users", user);
  }

  updateUser(user: User){
    return this.http.put<User>(`https://reqres.in/api/users/${user.id}`, user)
  }

  deleteUser(userId: number){
    return this.http.delete<User>(`https://reqres.in/api/users/${userId}`)
  }

}
