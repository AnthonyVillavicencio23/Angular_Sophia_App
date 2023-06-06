import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/model/cita';
import { Evaluacion } from 'src/app/model/evaluacion';
import { CitaService } from 'src/app/service/cita.service';
import { EvaluacionService } from 'src/app/service/evaluacion.service';

@Component({
  selector: 'app-evaluacion-creaedita',
  templateUrl: './evaluacion-creaedita.component.html',
  styleUrls: ['./evaluacion-creaedita.component.css']
})
export class EvaluacionCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  evaluacion: Evaluacion = new Evaluacion();
  mensaje: string = "";

  listaCita: Cita[]=[];
  idCitaSeleccionado: number = 0;

  constructor(private evS: EvaluacionService, private router: Router, private cS: CitaService)
  {

  }

  ngOnInit(): void {
    this.cS.list().subscribe(data => { this.listaCita = data });

    this.form = new FormGroup
    (
      {
        id: new FormControl(),
        diagnostico: new FormControl(),
        Cita: new FormControl()
      }
    )
  }
  aceptar(): void {
    this.evaluacion.id = this.form.value['id'];
    this.evaluacion.diagnostico = this.form.value['diagnostico'];
    this.evaluacion.Cita.disponible = this.form.value['Cita.disponible'];

    if (this.idCitaSeleccionado > 0 ) {
      //Cita
      let c = new Cita();
      c.id = this.idCitaSeleccionado;
      this.evaluacion.Cita = c;

      //Subcribe
      this.evS.insert(this.evaluacion).subscribe(() => {
        this.evS.list().subscribe(data => {
          this.evS.setList(data);
        })
      })
      this.router.navigate(['PruebaEvaluacion']);
    }
  }

}
