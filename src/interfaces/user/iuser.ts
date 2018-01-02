export class User {
  public name?: string;
  public lastname?: string;
  public mail?: string;

  public fullName() {
    return this.name + " " + this.lastname;
  }
  constructor(user: any) {
    this.name;
    this.lastname;
    this.mail;
    Object.assign(this, user);
  }
}

