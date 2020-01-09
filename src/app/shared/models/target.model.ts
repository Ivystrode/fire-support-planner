import { PlaceLocation } from '../../shared/models/location.model';


export class Target {
  // pipe() {
  //   throw new Error('Method not implemented.');  what is this even for?
  // }
    constructor(
        public target: string,
        public originator: string,
        public description: string,
        public grid: string,
        public location: PlaceLocation,
        public alt: number,
        public remarks: string,
        public isAdjusted: boolean
    ) {}
}
