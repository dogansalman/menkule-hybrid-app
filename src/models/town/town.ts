export class TownModel {
  public id?: number;
  public name?: string;

  constructor(town) {
    Object.assign(this, town);
  }
}
