import { LoginResponseModel } from './../model/login-response-model';
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
  private readonly TOKEN_KEY = 'auth_token';

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

    this.authService.signIn(authModel).subscribe((response) => {
      localStorage.setItem(this.TOKEN_KEY, JSON.stringify(response.token));
      this.form.reset();
    });
  }

  signOut(item: LoginResponseModel): void {
    localStorage.removeItem(item.token);
  }
}
