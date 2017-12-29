interface Iuser {
  id?: number,
  name?: string,
  lastname?: string,
  email?: string,
  gsm?: number,
  gender?: string,
  photo?: string,
  ownershiping?: boolean,
  advert_size?: number,
  notification_size?: number,
  state?: boolean,
  email_state?: boolean,
  gsm_state?: boolean,
  created_date?: string,
  getName?: Function;
}

export class User implements Iuser {
  constructor(
    public id: number,
    public name: string ,
    public lastname: string,
    public email: string,
    public gsm: number,
    public gender: string,
    public photo: string,
    public ownershiping: boolean,
    public advert_size: number,
    public notification_size: number,
    public state: boolean,
    public email_state: boolean,
    public gsm_state: boolean,
    public created_date: string,
  ) { }

  start() {
    return "Started " + this.name;
  }
}
