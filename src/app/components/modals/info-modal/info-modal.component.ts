import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef < InfoModalComponent > , @Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit() {}
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
}
