import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  LocalStorage
} from '@ngx-pwa/local-storage';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  hide = true;
  validUser = true;
  validUserEmail = true;
  loginUserFailure = '';
  loadingProgress = false;
  registrationSuccess = false;
  registrationFailure = false;
  registrationFailureError = '';
  maxDate = new Date(Date.now());
  startDate = this.maxDate;
  isForgotPassword = false;
  isChangePassword = false;
  isPasswordVerificationLinkSent = false;
  validUserEmailForReset = true;
  firstParamEmail = null;
  secondParamKey = null;
  isResetSuccess = false;
  isResetFailure = false;

  userDetail = {
    userName: '',
    password: ''
  };

  forgotPasswordDetail = {
    password: '',
    userName: '',
    verificationString: ''
  };

  resetPasswordDetail = {
    password: '',
    userName: '',
    verificationString: ''
  };

  userRegistrationDetail = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    roleName: [''],
    userType: 'ROLE_USER'
  };
  //check register email is right format
  registerEmailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  //check login email is right format
  loginEmailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorage
  ) { }

  ngOnInit() {
    this.localStorage.clear().subscribe(() => { });
  }

  gotoHome = function () {
    this.router.navigateByUrl('/home');
  };

  gotoForgotPassword = function () {
    this.isForgotPassword = true;
  };

  goBackToSignin = function () {
    this.isForgotPassword = false;
    this.isChangePassword = false;
  };

  loginUser() {
    this.gotoHome();
  }

  registerUser() {
    this.gotoHome();
  }

  changePasswordScreen() {
    if (this.firstParamEmail) {
      this.isChangePassword = true;
      this.resetPasswordDetail.userName = this.firstParamEmail;
    }
  }

  resetPassword = function () {

  };

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
