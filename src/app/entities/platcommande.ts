import { BaseEntity } from './base-entity';
import { Commande } from './commande';
import { Plat } from './plat';

export class PlatCommande extends BaseEntity {
  public nbPlat?: number;
  public plat?: Plat;
  public commande?: Commande;
}
