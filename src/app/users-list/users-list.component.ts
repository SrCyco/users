import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public usersList: User[];
  public state: string;
  public deleted: boolean;

  constructor(
    private usersService : UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetUserList();
    this.checkState();
  }

  private onGetUserList(): void {
    this.usersService.getUsers().subscribe((response: User[]) => {
      this.usersList = response
    });
  }

  private checkState(): void {
    this.state = this.route.snapshot.queryParamMap.get('state');
    switch (this.state) {
      case 'deleted':
        this.deleted = true;
        break;
      default:
        this.deleted = false;
        break;
    }
  }

  public onCreateUser(): void {
    this.router.navigate(['create-user']);
  }

}
