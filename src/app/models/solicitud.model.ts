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
    public metrosCuadrados: string,
    public montoInmueble: string,
    public numeroBanos: string,
    public numeroEstacionamientos: string,
    public numeroHabitaciones: string,
    public poseeAsesor: string,
    public tipoCalle: string,
    public tipoInmueble: string,
    public zonaDelInmueble: string,
    public id?: string
    ) {
  }

}
