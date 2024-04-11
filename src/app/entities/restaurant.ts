import { BaseEntity } from './base-entity';
import { Carte } from './carte';

export class Restaurant extends BaseEntity {
  public nom?: string;
  public adresse?: string;
  public description?: string;
  public status?: string;
  public carte?: Carte;
}
