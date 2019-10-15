import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef < ErrorModalComponent > , @Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit() {}
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
}
