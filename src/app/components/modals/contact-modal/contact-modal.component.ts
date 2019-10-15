import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef < ContactModalComponent > , @Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit() {}
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
}
