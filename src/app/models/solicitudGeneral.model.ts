export class SolicitudGeneral {

  constructor(
    public tipoSolicitud: string,
    public nombres: string,
    public apellidos: string,
    public email: string,
    public telefono: string,
    public servicio: string,
    public infoAdcional: string,
    public estado: string
    ) {
  }

}
