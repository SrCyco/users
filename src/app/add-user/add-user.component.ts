import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public createUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.createUserForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  public onCreateUser(): void {
    if (this.createUserForm.status === 'INVALID') {
      return; 
    }
    
    const body = this.createUserForm.value;
    this.userService.addUser(body)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['list'], {queryParams: {state: 'created'}});
      });
  }

}
