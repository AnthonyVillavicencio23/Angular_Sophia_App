import { Tarjeta } from './../../../model/tarjeta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TarjetaService } from 'src/app/service/tarjeta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorService } from 'src/app/service/tutor.service';
import { Tutor } from 'src/app/model/tutor';

@Component({
  selector: 'app-tarjeta-creadita',
  templateUrl: './tarjeta-creadita.component.html',
  styleUrls: ['./tarjeta-creadita.component.css']
})
export class TarjetaCreaditaComponent {
  form !: FormGroup
  tutores !: Tutor[]
  idTarjeta!: number;
  constructor(private fb: FormBuilder, private _snackbard : MatSnackBar, private tA : TarjetaService, private router: Router, private tS: TutorService, private route: ActivatedRoute) {}
  ngOnInit(){
    this.idTarjeta = this.route.snapshot.params["idTarjeta"];
    this.tS.list().subscribe(
      (data: Tutor[]) => this.tutores = data
    )
    this.form = this.fb.group(
      {
        idTarjeta: [''],
        numeroTarjeta: [''],
        tipoTarjeta: [''],
        tutor: ['']
      }
    )
    if(this.idTarjeta != null){
      this.tA.getTarjeta(this.idTarjeta).subscribe(
        (data: Tarjeta)=>{
          this.form = this.fb.group(
            {
              idTarjeta: [data.idTarjeta],
              numeroTarjeta: [data.numeroTarjeta],
              tipoTarjeta: [data.tipoTarjeta],
              tutor: [data.tutor]
            }
          )
        }
      )
    }
  }
  saveTarjeta(){
      if(this.idTarjeta != null){
        this.tA.updateTarjeta(this.form.value).subscribe(
          (tarjeta: Tarjeta) => {
            this._snackbard.open("Se actualizo la nueva tarjeta", "Ok");
            this.router.navigate(['Tarjeta/Listar']);
          }
          )
      } else{
        this.tA.addTarjeta(this.form.value).subscribe(
          (tarjeta: Tarjeta) => {
            this._snackbard.open("Se agrego la nueva tarjeta", "Ok");
            this.router.navigate(['Tarjeta/Listar']);
          }
          )
      }
    }
}
