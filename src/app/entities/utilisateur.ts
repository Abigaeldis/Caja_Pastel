import { BaseEntity } from './base-entity';
import { Restaurant } from './restaurant';

export class Utilisateur extends BaseEntity {
  public nom?: string;
  public prenom?: string;
  public mail?: string;
  public motDePasse?: string;
  public telephone?: string;
  public adresse?: string;
  public role?: string;
  public token?: string;
  public expirationTime?: Date;
  public restaurant?: Restaurant;
}
