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
  constructor(private userService: UserService) { 
    userService.getAllUsers().subscribe((data: any) => {
      this.users = data['data'];
      console.log(data);
    });
    console.log(this.users)
  }

  ngOnInit(): void {
  }
  
}
