import { Tutor } from "./tutor"


export class Estudiante
{
  id:number=0
  Tutor: Tutor=new Tutor()
  nombreEstudiante: string =""
  fechaNacimientoEstudiante: Date= new Date(Date.now())
  apPatEstudiante: string =""
  apMatEstudiante: string =""
  dniEstudiante: string =""
}


