import { BaseEntity } from './base-entity';
import { Restaurant } from './restaurant';

export class Table extends BaseEntity {
  public numTable?: number;
  public capaciteTable?: number;
  public etat?: string;
  public restaurant?: Restaurant;
}
