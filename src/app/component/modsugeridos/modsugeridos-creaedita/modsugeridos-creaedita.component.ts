import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Modulo } from 'src/app/model/modulo';
import { Modulos_Sugeridos } from 'src/app/model/modulos_sugeridos';
import { PruebaEvaluacion } from 'src/app/model/pruebaevaluacion';
import { ModuloSugeridoService } from 'src/app/service/modulo-sugerido.service';
import { moduloService } from 'src/app/service/modulo.service';
import { PruebaevaluacionService } from 'src/app/service/pruebaevaluacion.service';

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

  listamod: Modulo[] = [];
  idmoduloSeleccionado: number = 0;
  idModulosSugeridos: number = 0;

  listapruebaevaluacion: PruebaEvaluacion[] = [];
  idpruebaevaluacionSeleccionado: number = 0;
  idPruebaEvaluacion: number = 0;



  edicion: boolean = false;


  constructor(private msS: ModuloSugeridoService, private router: Router,
    private route: ActivatedRoute, private mS: moduloService, private peS: PruebaevaluacionService)
  {

  }

  ngOnInit(): void
  {

    this.route.params.subscribe((data: Params) =>
    {
      this.idModulosSugeridos=data['idModulosSugeridos'];
      this.edicion=data['idModulosSugeridos']!=null;

      this.init();

      this.idpruebaevaluacionSeleccionado=data['idpruebaevaluacionSeleccionado'];
      this.edicion=data['idpruebaevaluacionSeleccionado']!=null;

      this.init();
    })

    this.mS.list().subscribe(data => {this.listamod = data});
    this.peS.getPruebaEvaluaciones().subscribe(data => {this.listapruebaevaluacion = data});


    this.form = new FormGroup
    (
      {
        idModulosSugeridos: new FormControl(),
        pruebaevaluacion: new FormControl(),
        modulo: new FormControl(),
      }
    )
  }

  aceptar(): void
  {
    this.modsugeridos.idModulosSugeridos = this.form.value['idModulosSugeridos'];
    this.modsugeridos.pruebaevaluacion.diagnosticoPE = this.form.value['pruebaevaluacion.diagnosticoPE'];
    this.modsugeridos.modulo.nombreModulo=this.form.value['modulo.nombreModulo'];

    if(5==5)
    {
      if(this.edicion)
      {
        this.msS.update(this.modsugeridos).subscribe(()=>
        {
            this.msS.list().subscribe(data =>
              {
                this.msS.setList(data);
              })
        })
      }else
      {

        this.msS.insert(this.modsugeridos).subscribe(data=>
        {
          this.msS.list().subscribe(data =>
          {
            this.msS.setList(data);
          })
        })
      }

      this.router.navigate(['pages/ModuSugeridos/Listar']);
    }
    else
    {
      this.mensaje = "Complete los campos !!";
    }


    if (this.idmoduloSeleccionado>0)

  {

    let b = new PruebaEvaluacion();
    b.idPruebaEvaluacion = this.idpruebaevaluacionSeleccionado;
    this.modsugeridos.pruebaevaluacion=b;

      let a = new Modulo();
      a.idModulo = this.idmoduloSeleccionado;
      this.modsugeridos.modulo=a;





      this.msS.insert(this.modsugeridos).subscribe(() => {
      this.msS.list().subscribe(data => {
            this.msS.setList(data);
          })
        })

      this.router.navigate(['pages/ModuSugeridos/Listar']);

  }
}

init()
  {
    if(this.edicion)
    {
      this.msS.listID(this.idModulosSugeridos).subscribe(data =>{
          this.form = new FormGroup({
            idModulosSugeridos:new FormControl(data.idModulosSugeridos),
            pruebaevaluacion:new FormControl(data.pruebaevaluacion.diagnosticoPE),
            nombreModulo :new FormControl(data.modulo.nombreModulo),
          })
        })
      }
    }


}




