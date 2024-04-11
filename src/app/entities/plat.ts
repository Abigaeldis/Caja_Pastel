import { BaseEntity } from './base-entity';
import { Carte } from './carte';

export class Plat extends BaseEntity {
  public nom?: string;
  public description?: string;
  public prix?: number;
  public type?: string;
  public carte?: Carte;
}
