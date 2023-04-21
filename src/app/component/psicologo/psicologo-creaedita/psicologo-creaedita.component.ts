import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Psicologo } from 'src/app/model/psicologo';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { PsicologoService } from 'src/app/service/psicologo.service';
import { Route, Router } from '@angular/router';

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

  constructor(private as: PsicologoService, private router: Router)
  {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      nombrePsico: new FormControl(),
      apPatPsicologo: new FormControl(),
      apMatPsicologo: new FormControl(),
      fechaNacimiento: new FormControl(),
      especialidad: new FormControl()
    });
  }

  aceptar(): void {
    this.psicologo.id = this.form.value['id'];
    this.psicologo.nombrePsico = this.form.value['nombrePsico'];
    this.psicologo.apPatPsicologo = this.form.value['apPatPsicologo'];
    this.psicologo.apMatPsicologo = this.form.value['apMatPsicologo'];
    this.psicologo.fechaNacimiento = this.form.value['fechaNacimiento'];
    this.psicologo.especialidad = this.form.value['especialidad'];

    if (this.form.value['nombrePsico'].length>0 && this.form.value['apPatPsicologo'].length>0 &&
      this.form.value['apMatPsicologo'].length>0 &&
      this.form.value['especialidad'].length>0) {
      this.as.insert(this.psicologo).subscribe(data => {
        this.as.list().subscribe(data => {
          this.as.setList(data);
        })
      })
      this.router.navigate(['Psicologo/Listar']);
    } else {
      this.mensaje = "¡Complete los campos!";
    }
  }
}
