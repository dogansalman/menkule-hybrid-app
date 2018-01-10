export class TypesModel {
  public id?: number;
  public name?: string;
  public created_date?: Date;
  public updated_date?: Date;

  constructor(types) {
    Object.assign(this, types);
  }
}
