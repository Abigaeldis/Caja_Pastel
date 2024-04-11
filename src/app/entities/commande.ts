import { BaseEntity } from './base-entity';
import { Table } from './table';
import { Utilisateur } from './utilisateur';

export class Commande extends BaseEntity {
  public statut?: string;
  public date?: Date;
  public table?: Table;
  public utilisateur?: Utilisateur;
}
