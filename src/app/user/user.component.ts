import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserModel } from '../model/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    login: new FormControl(null),
    cpfCnpj: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    role: new FormControl(null),
  });

  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService
  ) {}

  register(): void {
    const userModel: UserModel = this.form.getRawValue();

    this.UserService.register(userModel).subscribe(() => {
      this.form.reset();
    });
  }
}
