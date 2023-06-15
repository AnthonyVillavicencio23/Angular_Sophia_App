import {Rendido} from "./rendido"
import { Cita } from "./cita"

export class PruebaEvaluacion {
  idPruebaEvaluacion:number=0
  cita:Cita = new Cita()
  diagnosticoPE:string=""
  calificacionPE:string=""
  rendido: Rendido = new Rendido()
}
