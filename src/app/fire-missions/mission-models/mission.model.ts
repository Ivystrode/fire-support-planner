import { AmmoOrder } from './ammo-order.model';
import { Engagement } from './engagement.model';


export class Mission {
    constructor(
        public id: string,
        public targetDesc: string,
        public ammoOrder: AmmoOrder,
        public imageUrl: string,
        public engagements: Array<Engagement>,
    ) {}
}
