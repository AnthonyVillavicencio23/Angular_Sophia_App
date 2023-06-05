import { catCita } from "./catCita";
import { Estudiante } from "./estudiante";
import { Psicologo } from "./psicologo";
import { Estado } from "./estado";

export class Cita {
  id: number = 0;
  disponible: string = "";
  fecha: Date = new Date();
  hora: string = "";
  CatCita: catCita = new catCita();
  Estudiante: Estudiante = new Estudiante();
  Psicologo: Psicologo = new Psicologo();
  Estado: Estado = new Estado();
}
