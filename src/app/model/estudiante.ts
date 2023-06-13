import { Tutor } from "./tutor"


export class Estudiante
{
  idEstudiante:number=0
  tutor: Tutor=new Tutor()
  nombreEstudiante: string =""
  fechaNacimientoEstudiante: Date= new Date(Date.now())
  apPatEstudiante: string =""
  apMatEstudiante: string =""
  dniEstudiante: string =""
}


