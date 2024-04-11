import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Commande } from '../../entities/commande';
import { CommandeService } from '../../services/commande.service';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommandeModalComponent } from '../commande-modal/commande-modal.component';

@Component({
  selector: 'app-liste-commandes',
  standalone: true,
  templateUrl: './liste-commandes.component.html',
  styleUrl: './liste-commandes.component.scss',
  imports: [NavbarComponent, HeaderComponent, CommonModule],
})
export class ListeCommandesComponent {
  public commandes$!: Observable<Commande[]>;
  public commande$!: Observable<Commande>;

  constructor(
    private commandeService: CommandeService,
    private ngbModal: NgbModal
  ) {
    this.refreshCommandes();
  }

  public refreshCommandes(): void {
    this.commandes$ = this.commandeService
      .getAllItems()
      .pipe(
        map((commandes: Commande[]) =>
          commandes.filter(
            (commande) =>
              commande.statut !== 'Terminée' && commande.statut !== 'Annulée'
          )
        )
      );
  }

  public modalOptions = {
    centered: true,
  };

  public selectCommande(commande: Commande): void {
    this.commandeService.currentCommande = commande;
    this.ngbModal.open(CommandeModalComponent, this.modalOptions);
  }
}
