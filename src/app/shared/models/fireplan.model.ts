export class Fireplan {
    // pipe() {
    //   throw new Error('Method not implemented.');  what is this even for?
    // }
      constructor(
          public planname: string,
          public supporting: string,
          public originator: string,
          public modsby: number,
          public superimposed: number,
          public hhr: string,
          public dtg: string,
          public targets: Array<any>,
          public isComplete: boolean
      ) {}
  }
