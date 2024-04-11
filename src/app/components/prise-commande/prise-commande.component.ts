import { Component } from '@angular/core';
import { PlatService } from '../../services/plat.service';
import { Plat } from '../../entities/plat';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Table } from '../../entities/table';
import { TableService } from '../../services/table.service';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RecapitulatifCommandeComponent } from '../recapitulatif-commande/recapitulatif-commande.component';
import { CommandeService } from '../../services/commande.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-prise-commande',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FormsModule,
    NgbModalModule,
    RecapitulatifCommandeComponent,
    NavbarComponent,
  ],
  templateUrl: './prise-commande.component.html',
  styleUrl: './prise-commande.component.scss',
})
  
export class PriseCommandeComponent {
  public listeItemsPlat$?: Observable<Plat[]>;
  public listeNbParItems: { [key: number]: number } = {};
  public listeTables$?: Observable<Table[]>;
  public currentTable?: Table;
  constructor(
    private platService: PlatService,
    private tableService: TableService,
    private ngbModal: NgbModal,
    private commandeService: CommandeService
  ) {
    this.refresh();
    this.currentTable = this.tableService.currentTable;
  }

  public refresh(): void {
    this.listeItemsPlat$ = this.platService.getAllItems();
    this.listeTables$ = this.tableService.getAllItems();
  }

  public addItem(item: Plat): void {
    if (item.id !== undefined) {
      if (this.listeNbParItems.hasOwnProperty(item.id)) {
        this.listeNbParItems[item.id]++;
      } else {
        this.listeNbParItems[item.id] = 1;
      }
    }
  }

  public removeItem(item: Plat): void {
    if (item.id !== undefined) {
      if (this.listeNbParItems.hasOwnProperty(item.id)) {
        if (this.listeNbParItems[item.id] > 0) {
          this.listeNbParItems[item.id]--;
        }
      } else {
        //On supprime de la liste l'élément du menu si on en commande 0
        delete this.listeNbParItems[item.id];
      }
    }
  }

  public lancerCommande(): void {
    console.log(this.currentTable?.numTable);
    console.log('Recap commande');
    for (const key in this.listeNbParItems) {
      if (this.listeNbParItems.hasOwnProperty(key)) {
        console.log('item n°' + key + ' - ' + this.listeNbParItems[key]);
      }
    }
    this.commandeService.currentListeNbPlat = this.listeNbParItems;
    this.commandeService.currentTable = this.currentTable;
    this.ngbModal.open(RecapitulatifCommandeComponent, { centered: true });
  }

  public clearCommande(): void {
    for (const key in this.listeNbParItems) {
      if (this.listeNbParItems.hasOwnProperty(key)) {
        delete this.listeNbParItems[key];
      }
    }
    console.log('clearCommande');
  }
}
