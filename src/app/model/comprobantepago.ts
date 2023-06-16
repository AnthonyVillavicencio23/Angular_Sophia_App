import { PagoDeModulo } from "./pagodemodulo"

export class ComprobantePago
{
  idComprobantePago:number=0
  montoIGV: number=0
  tipoDocumento: string=""
  ruc: string=""
  razonSocial: string=""
  numBoletaFactura: string=""
  pagoModulo: PagoDeModulo=new PagoDeModulo()
}
