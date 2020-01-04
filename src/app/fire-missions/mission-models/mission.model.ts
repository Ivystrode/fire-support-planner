import { AmmoOrder } from './ammo-order.model';
import { Engagement } from './engagement.model';


export class Mission {
  // pipe() {
  //   throw new Error('Method not implemented.');  what is this even for?
  // }
    constructor(
        public target: string,
        public description: string,
        public grid: string,
        public direction: number,
        public distance: number,
        public zone: string,
        public ammoType: string,
        public numRounds: number,
    ) {}
}
