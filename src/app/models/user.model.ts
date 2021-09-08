export class User {

  constructor(
    public uid: string,
    public email: string,
    public nombre: string,
    public apellido: string,
    public roles?: string[],
    public titulo?: string,
    public telefono1?: string,
    public telefono2?: string,
    public infoAdicional?: string,
    public pais?: string,
    public estado?: string,
    public ciudad?: string,
    ) {
  }

}
