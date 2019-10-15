import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {
  MatDialog,
  MatDialogConfig
} from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent implements OnInit {

  providerDetail = {
    firstName: '',
    lastName: '',
    userName: '',
    dob: '',
    gender: '',
    password: '',
    phoneNumber: '',
    roleName: [],
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    userType: ''
  };

  loadingProgress = false;
  registrationSuccess = false;
  maxDate = new Date(Date.now());
  startDate = this.maxDate;

  //check manager register email is right format
  providerEmailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  registrationFailure = false;
  registrationFailureError = '';

  constructor(
    private router: Router,
    private localStorage: LocalStorage,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.maxDate.setDate(this.maxDate.getDate());
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.startDate = this.maxDate;
  }

  addProviderUser = function () {

  };

  gotoAccountSummary = function () {
    this.router.navigateByUrl('/home/account-summary');
  };

  // openErrorDialog = function (error: string) {
  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.width = '500px';

  //   dialogConfig.data = {
  //     error: error
  //   };

  //   this.dialog.open(ErrorDialogComponent, dialogConfig);
  // };

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}