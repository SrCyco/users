import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() public user: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onViewUser(userId): void {
    this.router.navigate(['/user', userId]);
  }

}
