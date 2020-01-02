import { AmmoOrder } from './ammo-order.model';
import { Engagement } from './engagement.model';


export class Mission {
  pipe() {
    throw new Error('Method not implemented.');
  }
    constructor(
        public target: string,
        public grid: string,
        public direction: number,
        public distance: number,
        public zone: string,
        public ammoType: string,
        public numRounds: number,
    ) {}
}
