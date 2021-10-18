export class Solicitud {

  constructor(
    public tipoSolicitud: string,
    public pendiente: boolean,
    public nombres: string,
    public apellidos: string,
    public email: string,
    public telefono: string,
    public zonaDondeVive: string,
    public conoceExclusiva: string,
    public documentos: string,
    public estadoInmueble: string,
    public estimacion: string,
    public fechaDeseoVenta: string,
    public fechaInicioVenta: string,
    public horario: string,
    public infoAdicional: string,
    public montoInmueble: string,
    public numeroBanos: string,
    public numeroEstacionamientos: string,
    public numeroHabitaciones: string,
    public poseeAsesor: string,
    public tipoCalle: string,
    public tipoInmueble: string,
    public zonaDelInmueble: string,
    public viaConocimiento: string,
    public fecha: Date,
    public id?: string,
    public tipoTransaccion?: string,
    public equipamiento?: string,
    public metrosCuadrados?: string,
    public piso?: string,
    public rangoPrecio?: string,
    public debeVender?: string,
    public poseeMascota?: string,
    public formaDePago?: string,

    ) {
  }

}
