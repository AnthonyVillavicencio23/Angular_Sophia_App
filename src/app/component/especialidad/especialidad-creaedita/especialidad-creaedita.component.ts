import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Especialidad } from 'src/app/model/especialidad';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { Route, Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-especialidad-creaedita',
  templateUrl: './especialidad-creaedita.component.html',
  styleUrls: ['./especialidad-creaedita.component.css']
})
export class EspecialidadCreaeditaComponent implements OnInit
{
  form:FormGroup = new FormGroup({});
  especialidad: Especialidad = new Especialidad();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1,'days').toDate();
  idEspecialidad: number = 0;
  edicion: boolean = false;

  constructor(private as: EspecialidadService, private router: Router,  private route: ActivatedRoute)
  {

  }

  ngOnInit(): void {


      this.route.params.subscribe((data: Params) =>
      {
        this.idEspecialidad=data['idEspecialidad'];
        this.edicion=data['idEspecialidad']!=null;
        this.init()
      })



    this.form = new FormGroup({
      idEspecialidad: new FormControl(),
      nombre: new FormControl()
    });
  }

  aceptar(): void {
    this.especialidad.idEspecialidad = this.form.value['idEspecialidad'];
    this.especialidad.nombre = this.form.value['nombre'];

    if (this.form.value['nombre'].length>0) {

        if (this.edicion) {
          this.as.update(this.especialidad).subscribe((data) => {
            this.as.list().subscribe(data => {
              this.as.setList(data);
            })
          })
        } else {
          this.as.insert(this.especialidad).subscribe((data)=> {
            this.as.list().subscribe(data => {
              this.as.setList(data);
            })
          })
        }
      this.router.navigate(['pages/Especialidad/Listar']);
    } else {
      this.mensaje = "¡Complete los campos!";
    }
  }

  init() {
    if (this.edicion) {
      this.as.listID(this.idEspecialidad).subscribe(data => {
        this.form = new FormGroup({
          idEspecialidad: new FormControl(data.idEspecialidad),
          nombre: new FormControl(data.nombre)
        })
      })
    }
  }
}
