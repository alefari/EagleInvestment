export class User {

  constructor(
    public uid: string,
    public email: string,
    public nombre: string,
    public apellido: string,
    public profilePicUrl: string,
    public roles: string[],
    public titulo: string,
    public pais: string,
    public telefono1?: string,
    public telefono2?: string,
    public infoAdicional?: string,
    public estado?: string,
    public ciudad?: string,
    ) {
  }

}
