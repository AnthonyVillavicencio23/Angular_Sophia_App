import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Modulo } from 'src/app/model/modulo';
import { Modulos_Inscritos } from 'src/app/model/modulos_inscritos';
import { Modulos_Sugeridos } from 'src/app/model/modulos_sugeridos';
import { ModuloInscritoService } from 'src/app/service/modulo-inscrito.service';
import { ModuloSugeridoService } from 'src/app/service/modulo-sugerido.service';

@Component({
  selector: 'app-modinscritos-creaedita',
  templateUrl: './modinscritos-creaedita.component.html',
  styleUrls: ['./modinscritos-creaedita.component.css']
})

export class ModinscritosCreaeditaComponent implements OnInit
{

  form: FormGroup = new FormGroup({});
  modinscritos: Modulos_Inscritos = new Modulos_Inscritos();
  mensaje: string = "";

  lista: Modulos_Sugeridos[] = [];
  idmodSugeridoSeleccionado: number = 0;

  constructor(private miS: ModuloInscritoService, private router: Router,
    private route: ActivatedRoute, private msS: ModuloSugeridoService)
  {

  }

  ngOnInit(): void
  {

    this.msS.list().subscribe(data => {this.lista = data});

    this.form = new FormGroup
    (
      {
        idModulosInscritos: new FormControl(),
        estadoModulo: new FormControl(),
        aprobado: new FormControl(),
        modulos_sugeridos: new FormControl(),
      }
    )
  }

  aceptar(): void {
    this.modinscritos.idModulosInscritos = this.form.value['idModulosInscritos'];
    this.modinscritos.estadoModulo = this.form.value['estadoModulo'];
    this.modinscritos.aprobado = this.form.value['aprobado'];
    this.modinscritos.modulos_sugeridos.idModulosSugeridos =this.form.value['modulos_sugeridos.idModulosSugeridos'];

    if (this.idmodSugeridoSeleccionado>0) {
      let a = new Modulos_Sugeridos();
      a.idModulosSugeridos = this.idmodSugeridoSeleccionado;
      this.modinscritos.modulos_sugeridos=a;
      this.miS.insert(this.modinscritos).subscribe(() => {
      this.miS.list().subscribe(data => {
            this.miS.setList(data);
          })
        })

      this.router.navigate(['ModuInscritos/Listar']);

  }
}


}





