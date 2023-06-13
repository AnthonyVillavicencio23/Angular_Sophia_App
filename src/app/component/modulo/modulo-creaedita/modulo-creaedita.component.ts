import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Modulo } from 'src/app/model/modulo';
import * as moment from 'moment';
import { moduloService } from 'src/app/service/modulo.service';
import { cursoService } from 'src/app/service/curso.service';
import { curso } from 'src/app/model/curso';

@Component({
  selector: 'app-modulo-creaedita',
  templateUrl: './modulo-creaedita.component.html',
  styleUrls: ['./modulo-creaedita.component.css']
})
export class ModuloCreaeditaComponent implements OnInit
{

  form: FormGroup = new FormGroup({});
  module: Modulo = new Modulo();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  lista: curso[] = [];
  idCursoSeleccionado: number = 0;

  constructor(private eS: moduloService, private router: Router, private route: ActivatedRoute, private tS: cursoService)
  {

  }

  ngOnInit(): void
  {

    this.tS.list().subscribe(data => {this.lista = data});

    this.form = new FormGroup
    (
      {
        idModulo: new FormControl(),
        nombreModulo: new FormControl(),
        curso: new FormControl(),
      }
    )
  }

  aceptar(): void {
    this.module.idModulo = this.form.value['idModulo'];
    this.module.nombreModulo = this.form.value['nombreModulo'];
    this.module.curso.nameCurso=this.form.value['curso.nameCurso'];

    if (this.idCursoSeleccionado>0) {
      let a = new curso();
      a.idcurso = this.idCursoSeleccionado;
      this.module.curso=a;
      this.eS.insert(this.module).subscribe(() => {
      this.eS.list().subscribe(data => {
            this.eS.setList(data);
          })
        })

      this.router.navigate(['Modulos/Listar']);

  }
}




}