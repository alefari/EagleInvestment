export class User {

  constructor(
    public uid: string,
    public email: string,
    public nombre: string,
    public apellido: string,
    public roles: string[],
    public titulo: string) {
  }

}
