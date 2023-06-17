import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Psicologo } from 'src/app/model/psicologo';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { PsicologoService } from 'src/app/service/psicologo.service';
import { Route, Router, ActivatedRoute, Params} from '@angular/router';
import { Especialidad } from 'src/app/model/especialidad';
import { EspecialidadService } from 'src/app/service/especialidad.service';

@Component({
  selector: 'app-psicologo-creaedita',
  templateUrl: './psicologo-creaedita.component.html',
  styleUrls: ['./psicologo-creaedita.component.css']
})
export class PsicologoCreaeditaComponent implements OnInit
{
  form:FormGroup = new FormGroup({});
  psicologo: Psicologo = new Psicologo();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1,'days').toDate();
  idPsicologo: number = 0;
  edicion: boolean = false;

  lista: Especialidad[] = [];
  idEspecialidadSeleccionado: number = 0;

  constructor(private as: PsicologoService, private router: Router,  private route: ActivatedRoute, private eS: EspecialidadService)
  {

  }

  ngOnInit(): void {

    this.eS.list().subscribe(data => {this.lista = data});

      this.route.params.subscribe((data: Params) =>
      {
        this.idPsicologo=data['idPsicologo'];
        this.edicion=data['idPsicologo']!=null;
        this.init()
      })



    this.form = new FormGroup({
      idPsicologo: new FormControl(),
      nombrePsico: new FormControl(),
      apPatPsicologo: new FormControl(),
      apMatPsicologo: new FormControl(),
      fechaNacimiento: new FormControl(),
      especialidad: new FormControl(),
    });
  }

  aceptar(): void {
    this.psicologo.idPsicologo = this.form.value['idPsicologo'];
    this.psicologo.nombrePsico = this.form.value['nombrePsico'];
    this.psicologo.apPatPsicologo = this.form.value['apPatPsicologo'];
    this.psicologo.apMatPsicologo = this.form.value['apMatPsicologo'];
    this.psicologo.fechaNacimiento = this.form.value['fechaNacimiento'];
    this.psicologo.especialidad.nombre = this.form.value['especialidad.nombre'];

    if (this.form.value['nombrePsico'].length>0 && this.form.value['apPatPsicologo'].length>0 &&
      this.form.value['apMatPsicologo'].length>0 ) {

        if (this.edicion) {
          this.as.update(this.psicologo).subscribe((data) => {
            this.as.list().subscribe(data => {
              this.as.setList(data);
            })
          })
        } else {
          this.as.insert(this.psicologo).subscribe((data)=> {
            this.as.list().subscribe(data => {
              this.as.setList(data);
            })
          })
        }
      this.router.navigate(['Psicologo/Listar']);
    } else {
      this.mensaje = "¡Complete los campos!";
    }
    
    if (this.idEspecialidadSeleccionado>0) {
      let a = new Especialidad();
      a.idEspecialidad = this.idEspecialidadSeleccionado;
      this.psicologo.especialidad=a;
      this.as.insert(this.psicologo).subscribe(() => {
      this.as.list().subscribe(data => {
            this.as.setList(data);
          })
        })
  
      this.router.navigate(['Psicologo/Listar']);
  
  }

  }


  init() {
    if (this.edicion) {
      this.as.listID(this.idPsicologo).subscribe(data => {
        this.form = new FormGroup({
          idPsicologo: new FormControl(data.idPsicologo),
          nombrePsico: new FormControl(data.nombrePsico),
          apPatPsicologo: new FormControl(data.apPatPsicologo),
          apMatPsicologo: new FormControl(data.apMatPsicologo),
          fechaNacimiento: new FormControl(data.fechaNacimiento),
          especialidad: new FormControl(data.especialidad.nombre)
        })
      })
    }
  }
}
