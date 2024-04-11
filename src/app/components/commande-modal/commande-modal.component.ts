import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Commande } from '../../entities/commande';
import { CommandeService } from '../../services/commande.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-commande-modal',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, CommonModule],
  templateUrl: './commande-modal.component.html',
  styleUrl: './commande-modal.component.scss',
})
export class CommandeModalComponent {
  public commande?: Commande;
  public addition?: any;
  public detailCommande$?: Observable<any>;

  constructor(
    private commandeService: CommandeService,
    private activeModal: NgbActiveModal
  ) {
    this.commande = commandeService.currentCommande;
    if (this.commande?.id) {
      this.detailCommande$ = this.commandeService.getAdditionByCommande(
        this.commande.id
      );
      console.log(this.detailCommande$);
    }
  }

  onClose() {
    this.activeModal.close();
  }
}
