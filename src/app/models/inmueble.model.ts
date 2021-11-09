export class Inmueble {

  constructor(
    public pais: string,
    public estado: string,
    public ciudad: string,
    public tipoInmueble: string,
    public operacion: string,
    public zona: string,
    public precio: number,
    public metrosTotales: number,
    public metrosConstruccion: number,
    public estacionamientos: number,
    public habitaciones: number,
    public banos: number,
    public direccion: string,
    public descripcion: string,
    public imagenesURL: string[],
    public uidAgente: string,
    public estadoConservacion: string,
    public seguridad: string,
    public equipamiento: string,
    public activo: boolean,
    public id?: string
    ) {
  }

}
