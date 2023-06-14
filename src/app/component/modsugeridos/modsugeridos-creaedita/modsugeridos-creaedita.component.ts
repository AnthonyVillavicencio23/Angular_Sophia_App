import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Modulo } from 'src/app/model/modulo';
import { Modulos_Sugeridos } from 'src/app/model/modulos_sugeridos';
import { ModuloSugeridoService } from 'src/app/service/modulo-sugerido.service';
import { moduloService } from 'src/app/service/modulo.service';

@Component({
  selector: 'app-modsugeridos-creaedita',
  templateUrl: './modsugeridos-creaedita.component.html',
  styleUrls: ['./modsugeridos-creaedita.component.css']
})
export class ModsugeridosCreaeditaComponent implements OnInit
{

  form: FormGroup = new FormGroup({});
  modsugeridos: Modulos_Sugeridos = new Modulos_Sugeridos();
  mensaje: string = "";

  lista: Modulo[] = [];
  idmoduloSeleccionado: number = 0;

  constructor(private msS: ModuloSugeridoService, private router: Router,
    private route: ActivatedRoute, private mS: moduloService)
  {

  }

  ngOnInit(): void
  {

    this.mS.list().subscribe(data => {this.lista = data});

    this.form = new FormGroup
    (
      {
        idModulosSugeridos: new FormControl(),
        pruebaevaluacion: new FormControl(),
        modulo: new FormControl(),
      }
    )
  }

  aceptar(): void {
    this.modsugeridos.idModulosSugeridos = this.form.value['idModulosSugeridos'];
    this.modsugeridos.pruebaevaluacion = this.form.value['pruebaevaluacion'];
    this.modsugeridos.modulo.nombreModulo=this.form.value['modulo.nombreModulo'];

    if (this.idmoduloSeleccionado>0) {
      let a = new Modulo();
      a.idModulo = this.idmoduloSeleccionado;
      this.modsugeridos.modulo=a;
      this.msS.insert(this.modsugeridos).subscribe(() => {
      this.msS.list().subscribe(data => {
            this.msS.setList(data);
          })
        })

      this.router.navigate(['ModuSugeridos/Listar']);

  }
}


}




