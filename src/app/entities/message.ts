import { BaseEntity } from './base-entity';
import { Restaurant } from './restaurant';
import { Utilisateur } from './utilisateur';

export class Message extends BaseEntity {
  public titre?: string;
  public corpsMessage?: string;
  public restaurant?: Restaurant;
  public utilisateur?: Utilisateur;
}
