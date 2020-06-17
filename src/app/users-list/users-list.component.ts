import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public usersList: User[];

  constructor(
    private usersService : UserService
  ) { }

  ngOnInit(): void {
    this.onGetUserList();
  }

  private onGetUserList(): void {
    this.usersService.getUsers().subscribe((response: User[]) => {
      this.usersList = response
    });
  }

}
