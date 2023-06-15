import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
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


  idEstudiante: number = 0;
  edicion: boolean = false;

  constructor(private eS: EstudianteService, private router: Router, private route: ActivatedRoute, private tS: TutorService)
  {

  }

  ngOnInit(): void
  {

    this.route.params.subscribe((data: Params) =>
    {
      this.idEstudiante=data['idEstudiante'];
      this.edicion=data['idEstudiante']!=null;
      this.init();
    })

    this.tS.list().subscribe(data => {this.lista = data});

    this.form = new FormGroup
    (
      {
        idEstudiante: new FormControl(),
        nombreEstudiante: new FormControl(),
        fechaNacimientoEstudiante: new FormControl(),
        apPatEstudiante: new FormControl(),
        apMatEstudiante: new FormControl(),
        dniEstudiante: new FormControl(),
        tutor: new FormControl(),
      }
    )
  }

  aceptar(): void {
    this.student.idEstudiante = this.form.value['idEstudiante'];
    this.student.nombreEstudiante = this.form.value['nombreEstudiante'];
    this.student.fechaNacimientoEstudiante = this.form.value['fechaNacimientoEstudiante'];
    this.student.apPatEstudiante = this.form.value['apPatEstudiante'];
    this.student.apMatEstudiante=this.form.value['apMatEstudiante'];
    this.student.dniEstudiante=this.form.value['dniEstudiante'];
    this.student.tutor.nombreTutor=this.form.value['tutor.nombreTutor'];


    if(this.form.value['nombreEstudiante'].length>0)
    {
      if(this.edicion)
      {
        this.eS.update(this.student).subscribe(()=>
        {
            this.eS.list().subscribe(data =>
              {
                this.eS.setList(data);
              })
        })
      }else
      {

        this.eS.insert(this.student).subscribe(data=>
        {
          this.eS.list().subscribe(data =>
          {
            this.eS.setList(data);
          })
        })
      }

      this.router.navigate(['Estudiantes/Listar']);
    }
    else
    {
      this.mensaje = "Complete los campos !!";
    }


    if (this.idTutorSeleccionado>0) {
      let a = new Tutor();
      a.idTutor = this.idTutorSeleccionado;
      this.student.tutor=a;
      this.eS.insert(this.student).subscribe(() => {
      this.eS.list().subscribe(data => {
            this.eS.setList(data);
          })
        })

      this.router.navigate(['Estudiantes/Listar']);

  }
}


init()
  {
    if(this.edicion)
    {
      this.eS.listID(this.idEstudiante).subscribe(data =>{
          this.form = new FormGroup({
            idEstudiante:new FormControl(data.idEstudiante),
            nombreEstudiante:new FormControl(data.nombreEstudiante),
            fechaNacimientoEstudiante:new FormControl(data.fechaNacimientoEstudiante),
            apPatEstudiante:new FormControl(data.apPatEstudiante),
            apMatEstudiante:new FormControl(data.apMatEstudiante),
            dniEstudiante:new FormControl(data.dniEstudiante),
            tutor :new FormControl(data.tutor.nombreTutor),
          })
        })
      }
    }



}
