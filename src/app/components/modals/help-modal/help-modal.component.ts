import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss']
})
export class HelpModalComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef < HelpModalComponent > , @Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit() {}
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
}
