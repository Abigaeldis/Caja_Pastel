import { Time } from '@angular/common';
import { BaseEntity } from './base-entity';
import { Restaurant } from './restaurant';

export class Horaire extends BaseEntity {
  public jour?: string;
  public heureDeDebut?: Time;
  public heureDeFin?: Time;
  public creneau?: string;
  public restaurant?: Restaurant;
}
