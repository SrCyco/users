import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  public user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetUserId();
  }

  private onGetUserId(): void {
    this.route.params.subscribe((params: Params) => {
      this.getUserData(Number(params.id));
    });
  }

  public onDeleteUser(userId): void {
    this.userService.deleteUser(userId)
      .subscribe(response => {
        this.router.navigate(['/list'], {queryParams: {state: 'deleted'}});
      });
  }

  private getUserData(userId: number): void {
    this.userService.getUser(userId)
      .subscribe((response: User) => {
        this.user = response;
      });
  }

}
