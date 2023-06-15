import { PruebaEvaluacion } from 'src/app/model/pruebaevaluacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PruebaevaluacionService } from 'src/app/service/pruebaevaluacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/service/cita.service';
import { Cita } from 'src/app/model/cita';
import { RendidoService } from 'src/app/service/rendido.service';
import { Rendido } from 'src/app/model/rendido';

@Component({
  selector: 'app-pruebaevaluacion-creaedita',
  templateUrl: './pruebaevaluacion-creaedita.component.html',
  styleUrls: ['./pruebaevaluacion-creaedita.component.css']
})
export class PruebaevaluacionCreaeditaComponent {
  form !: FormGroup
  citas !: Cita[]
  rendidos !: Rendido[]
  idPruebaEvaluacion!: number;
  constructor(private fb: FormBuilder, private _snackbard : MatSnackBar,
    private pE : PruebaevaluacionService, private router: Router, private cI: CitaService,
    private rE: RendidoService, private route: ActivatedRoute) {}
  ngOnInit(){
    this.idPruebaEvaluacion = this.route.snapshot.params["id"];
    this.cI.list().subscribe(
      (data: Cita[]) => this.citas = data
    )
    this.rE.getRendidos().subscribe(
      (data: Rendido[]) => this.rendidos = data
    )
    this.form = this.fb.group(
      {
        idPruebaEvaluacion: [''],
        cita: ['', Validators.required],
        diagnosticoPE: ['', Validators.required],
        calificacionPE: ['',[Validators.required, Validators.maxLength(2)]],
        rendido: ['', Validators.required]
      }
    )
    if(this.idPruebaEvaluacion != null){
      this.pE.getPruebaEvaluacion(this.idPruebaEvaluacion).subscribe(
        (data: PruebaEvaluacion)=>{
          this.form = this.fb.group(
            {
              idPruebaEvaluacion: [data.idPruebaEvaluacion],
              cita: [data.cita,[Validators.required]],
              diagnosticoPE: [data.diagnosticoPE, Validators.required],
              calificacionPE: [data.calificacionPE,[Validators.required, Validators.maxLength(2)]],
              rendido: [data.rendido, Validators.required]
            }
          )
        }
      )
    }
  }
  savePrueba(){
    if(this.idPruebaEvaluacion != null){
      this.pE.updatePruebaEvaluacion(this.form.value).subscribe(
        (pruebaevaluacion: PruebaEvaluacion) => {
          this._snackbard.open("Se actualizo la nueva prueba de evaluacion", "Ok");
          this.router.navigate(['PruebaEvaluacion/Listar']);
        }
      )
    } else {
      this.pE.addPruebaEvaluacion(this.form.value).subscribe(
        (pruebaevaluacion: PruebaEvaluacion) => {
          this._snackbard.open("Se agrego una nueva evaluacion", "Ok");
          this.router.navigate(['PruebaEvaluacion/Listar']);
        }
      )
    }
  }
}
