export class City {
  public id?: number;
  public name?: string;

  constructor(city) {
    Object.assign(this,city);
  }
}
