import { catCita } from "./catCita";
import { Estudiante } from "./estudiante";
import { Psicologo } from "./psicologo";
import { Estado } from "./estado";

export class Cita {
  idCita: number = 0;
  disponible: string = "";
  fecha: Date = new Date();
  hora: string = "";
  catCita: catCita = new catCita();
  estudiante: Estudiante = new Estudiante();
  psicologo: Psicologo = new Psicologo();
  estado: Estado = new Estado();
}
