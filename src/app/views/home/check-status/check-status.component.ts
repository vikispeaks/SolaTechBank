import {
  Component,
  OnInit
} from '@angular/core';
import {
  CheckStatusService
} from 'src/app/services/home/check-status/check-status.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ErrorModalComponent } from 'src/app/components/modals/error-modal/error-modal.component';
import { SuccessModalComponent } from 'src/app/components/modals/success-modal/success-modal.component';


@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.sass']
})
export class CheckStatusComponent implements OnInit {

  applicationID = 0;
  applicationStatusDetail = {
    'amount': '',
    'applicationId': '',
    'corporateName': '',
    'representativeName': '',
    'statusName': ''
  };

  applicationStatusAvailable = false;
  loanStatusAvailable = false;


  constructor(
    private checkStatusService: CheckStatusService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {}

  getApplicationStatus = function () {
    this.checkStatusService.getApplicationStatus(this.applicationID).subscribe(
      data => {
        this.applicationStatusDetail = data;
        this.openSuccessDialog();
        this.applicationStatusAvailable = true;
      },
      error => {
        this.loadingProgress = false;
        this.openErrorDialog();
      }
    );
  };

  openErrorDialog = function () {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '500px';

    this.dialog.open(ErrorModalComponent, dialogConfig);
  };

  openSuccessDialog = function () {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '500px';

    this.dialog.open(SuccessModalComponent, dialogConfig);
  };

}
