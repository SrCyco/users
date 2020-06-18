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
    if (this.createUserForm.invalid) {
      return Object.values(this.createUserForm.controls).forEach( control => {
        control.markAsTouched();
      }); 
    }
    
    const body = this.createUserForm.value;
    this.userService.addUser(body)
      .subscribe(response => {
        this.router.navigate(['list'], {queryParams: {state: 'created'}});
      });
  }

  public get fc() {
    return this.createUserForm.controls;
  }

  public validationError(controlName, error): boolean {
    const control = this.fc[controlName];
    return control.errors && control.errors[error] && control.touched;
  }

}
