import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthModel } from '../model/auth-model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  form: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  signIn(): void {
    const authModel: AuthModel = this.form.getRawValue();

    this.authService.signIn(authModel).subscribe(() => {
      this.form.reset();
    });
  }
}
