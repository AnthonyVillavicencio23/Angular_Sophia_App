import { Tarjeta } from "./tarjeta"
import { Modulo } from "./modulo"


export class PagoDeModulo
{
  idPagodeModulo:number=0
  montopormodulo: string=""
  fechapago: Date = new Date(Date.now())
  pagado: string=""
  tarjetacredito: Tarjeta=new Tarjeta()
  modulo: Modulo=new Modulo()


}
