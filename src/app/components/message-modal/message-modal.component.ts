import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../entities/message';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [],
  templateUrl: './message-modal.component.html',
  styleUrl: './message-modal.component.scss',
})
export class MessageModalComponent {
  public message?: Message;

  constructor(
    private messageService: MessageService,
    private activeModal: NgbActiveModal
  ) {
    this.message = messageService.currentMessage;
  }

  onClose() {
    this.activeModal.close();
  }
}
