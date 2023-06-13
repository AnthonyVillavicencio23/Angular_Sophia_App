import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Psicologo } from 'src/app/model/psicologo';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { PsicologoService } from 'src/app/service/psicologo.service';
import { Route, Router, ActivatedRoute, Params} from '@angular/router';

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

  constructor(private as: PsicologoService, private router: Router,  private route: ActivatedRoute)
  {

  }

  ngOnInit(): void {


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
      especialidad: new FormControl()
    });
  }

  aceptar(): void {
    this.psicologo.idPsicologo = this.form.value['idPsicologo'];
    this.psicologo.nombrePsico = this.form.value['nombrePsico'];
    this.psicologo.apPatPsicologo = this.form.value['apPatPsicologo'];
    this.psicologo.apMatPsicologo = this.form.value['apMatPsicologo'];
    this.psicologo.fechaNacimiento = this.form.value['fechaNacimiento'];
    this.psicologo.especialidad = this.form.value['especialidad'];

    if (this.form.value['nombrePsico'].length>0 && this.form.value['apPatPsicologo'].length>0 &&
      this.form.value['apMatPsicologo'].length>0 &&
      this.form.value['especialidad'].length>0) {

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
          especialidad: new FormControl(data.especialidad)
        })
      })
    }
  }
}
