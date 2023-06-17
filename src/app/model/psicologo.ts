import { Especialidad } from "./especialidad"

export class Psicologo
{
  idPsicologo:number=0
  nombrePsico: string = ""
  apPatPsicologo: string = ""
  apMatPsicologo: string = ""
  fechaNacimiento: Date = new Date(Date.now())
  especialidad: Especialidad=new Especialidad()
}
