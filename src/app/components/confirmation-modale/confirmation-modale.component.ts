// message-modal.component.ts
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modale.component.html',
  styleUrl: './confirmation-modale.component.scss',
})
export class ConfirmationModalComponent {
  @Input() id!: number;

  constructor(private modal: NgbActiveModal) {}

  dismiss() {
    this.modal.dismiss();
  }

  confirm() {
    this.modal.close(this.id);
  }
}
