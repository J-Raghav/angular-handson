import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  response = {}

  constructor(private userService: UserService) { 
    userService.getAllUsers().subscribe((data: any) => {
      this.users = data['data'];
    });
  }

  ngOnInit(): void {
  }

  createUser(first_name: string, email: string){
    let data = {id: 5, first_name, email};
    this.userService.createUser(data).subscribe(data => {
      this.response = data;
    })
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data => {
      this.response = data;
    })
    console.log("deleting");
  }
  
}
