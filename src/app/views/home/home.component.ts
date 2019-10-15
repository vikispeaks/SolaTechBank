import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  HelpModalComponent
} from '../../components/modals/help-modal/help-modal.component';

import {
  LocalStorage
} from '@ngx-pwa/local-storage';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private router: Router,
    public dialog: MatDialog,
    protected localStorage: LocalStorage,
    public snackBar: MatSnackBar) { }



  ngOnInit() {
    setTimeout(() => this.loadSnackBar());
  }

  openHelpDialog() {
    const dialogRef = this.dialog.open(HelpModalComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }


  loadSnackBar() {
    this.snackBar.open('Logged In Successfully', 'Dismiss', {
      duration: 1000,
    });
  }

  gotoCheckStatus = function () {
    this.router.navigateByUrl('/home/check-status');
  };

  gotoLoanRequest = function () {
    this.router.navigateByUrl('/home/loan-request');
  };

  signOut = function () {
    this.localStorage.clear().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  };

}
