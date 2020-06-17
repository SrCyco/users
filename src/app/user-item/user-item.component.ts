import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() public userInfo: User;

  constructor() { }

  ngOnInit(): void {
  }

}
