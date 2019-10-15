import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef < SuccessModalComponent > , @Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit() {}
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
}
