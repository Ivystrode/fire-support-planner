import { AmmoOrder } from './ammo-order.model';
import { Engagement } from './engagement.model';


export class Mission {
    constructor(
        public target: string,
        public grid: string,
        public direction: number,
        public distance: number,
        public ammoType: string,
        public numRounds: number,
    ) {}
}
