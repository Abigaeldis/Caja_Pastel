import { Component } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { Table } from '../../entities/table';
import { CommonModule } from '@angular/common';
import { PlatService } from '../../services/plat.service';
import { Plat } from '../../entities/plat';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Commande } from '../../entities/commande';
import { PlatCommande } from '../../entities/platcommande';

@Component({
  selector: 'app-recapitulatif-commande',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recapitulatif-commande.component.html',
  styleUrl: './recapitulatif-commande.component.scss',
})
export class RecapitulatifCommandeComponent {
  public table!: Table;
  public listeNbPlat!: { [key: number]: number };
  public tableau: { key: Observable<Plat>; value: number }[] = [];
  public listePlatCommande?: PlatCommande[];

  constructor(
    private commandeService: CommandeService,
    private platService: PlatService,
    private activeModal: NgbActiveModal,
    private router: Router
  ) {
    this.table = this.commandeService.currentTable
      ? this.commandeService.currentTable
      : new Table();
    this.listeNbPlat = this.commandeService.currentListeNbPlat
      ? this.commandeService.currentListeNbPlat
      : {};
  }

  ngOnInit(): void {
    this.tableau = Object.keys(this.listeNbPlat).map((key) => ({
      key: this.platService.getItemById(parseInt(key)),
      value: this.listeNbPlat[parseInt(key)],
    }));
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  confirm() {
    let commande: Commande = new Commande();
    commande.date = new Date();
    console.log(commande.date);
    commande.statut = 'LANCEE';
    commande.table = this.table;
    this.commandeService.postItem(commande);

    this.activeModal.close();
    this.router.navigate(['/accueil']);
  }
}
