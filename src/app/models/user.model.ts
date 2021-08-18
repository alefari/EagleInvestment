export class User {

  constructor(
    public uid: string,
    public email: string,
    private nombre: string,
    private apellido: string,
    public roles: string[]) {
  }

}
