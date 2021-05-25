import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userNameKey } from 'src/app/constats/application.constants';
import { LoginService } from 'src/app/services/login.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logInDetails: any;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private session: SessionService
  ) {
    this.logInDetails = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.logInDetails.get('username').valueChanges.subscribe((data: any) => {
      //alert(data);
    });
  }

  ngOnInit(): void {}
  onFormSubmit() {
    const isvalid = this.loginService.validateUser(this.logInDetails.value);
    if (isvalid) {
      this.session.insrtIntoSession(
        userNameKey,
        this.logInDetails.value.username
      );
      this.router.navigate(['/home']);
    } else {
      alert('invlaid');
    }
  }
}
