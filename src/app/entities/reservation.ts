import { BaseEntity } from './base-entity';
import { Restaurant } from './restaurant';
import { Table } from './table';
import { Utilisateur } from './utilisateur';

export class Reservation extends BaseEntity {
  public date?: Date;
  public statut?: string;
  public nbPersonne?: number;
  public utilisateur?: Utilisateur;
  public table?: Table;
  public restaurant?: Restaurant;
}
