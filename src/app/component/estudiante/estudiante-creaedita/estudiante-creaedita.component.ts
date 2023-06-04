import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/model/estudiante';
import * as moment from 'moment';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { TutorService } from 'src/app/service/tutor.service';
import { Tutor } from 'src/app/model/tutor';

@Component({
  selector: 'app-estudiante-creaedita',
  templateUrl: './estudiante-creaedita.component.html',
  styleUrls: ['./estudiante-creaedita.component.css']
})
export class EstudianteCreaeditaComponent implements OnInit
{

  form: FormGroup = new FormGroup({});
  student: Estudiante = new Estudiante();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  lista: Tutor[] = [];
  idTutorSeleccionado: number = 0;

  constructor(private eS: EstudianteService, private router: Router, private tS: TutorService)
  {

  }

  ngOnInit(): void
  {
    this.form = new FormGroup
    (
      {
        id: new FormControl(),
        nombreEstudiante: new FormControl(),
        fechaNacimientoEstudiante: new FormControl(),
        apPatEstudiante: new FormControl(),
        apMatEstudiante: new FormControl(),
        dniEstudiante: new FormControl(),
        Tutor: new FormControl(),
      }
    )
  }

  aceptar(): void {
    this.student.id = this.form.value['id'];
    this.student.nombreEstudiante = this.form.value['nombreEstudiante'];
    this.student.fechaNacimientoEstudiante = this.form.value['fechaNacimientoEstudiante'];
    this.student.apPatEstudiante = this.form.value['apPatEstudiante'];
    this.student.apMatEstudiante=this.form.value['author.apMatEstudiante'];
    this.student.dniEstudiante=this.form.value['author.dniEstudiante'];
    this.student.Tutor.nombreTutor=this.form.value['Tutor.nombreTutor'];

    if (this.idTutorSeleccionado>0) {
      let a = new Tutor();
      a.id = this.idTutorSeleccionado;
      this.student.Tutor=a;
      this.eS.insert(this.student).subscribe(() => {
      this.eS.list().subscribe(data => {
            this.eS.setList(data);
          })
        })

      this.router.navigate(['Estudiantes/Listar']);

  }
}




}
