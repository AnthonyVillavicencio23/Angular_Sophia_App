import { Rendido } from 'src/app/model/rendido';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RendidoService} from 'src/app/service/rendido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rendido-creaedita',
  templateUrl: './rendido-creaedita.component.html',
  styleUrls: ['./rendido-creaedita.component.css']
})
export class RendidoCreaeditaComponent {
  form !: FormGroup
  idRendido!: number;
  constructor(private fb: FormBuilder, private _snackbard : MatSnackBar,
    private rE : RendidoService, private router: Router,
    private route: ActivatedRoute) {}
    ngOnInit(){
      this.idRendido = this.route.snapshot.params["id"];
      this.form = this.fb.group(
        {
          idRendido: [''],
          nombreRendido: ['',[Validators.required, Validators.maxLength(30), Validators.minLength(30)]],
        }
      )
      if(this.idRendido != null){
        this.rE.getRendido(this.idRendido).subscribe(
          (data: Rendido) =>{
            this.form = this.fb.group(
              {
                idRendido: [data.idRendido],
                nombreRendido: [data.nombreRendido,[Validators.required, Validators.maxLength(30), Validators.minLength(30)]]
              }
            )
          }
        )
      }
    }
    saveRendido(){
      if(this.idRendido != null){
        this.rE.updateRendido(this.form.value).subscribe(
          (rendido: Rendido) => {
            this._snackbard.open("Se actualizo", "Ok");
            this.router.navigate(['Rendido/Listar']);
          }
        )
      } else {
        this.rE.addRendido(this.form.value).subscribe(
          (rendido: Rendido) => {
            this._snackbard.open("Se agrego", "Ok");
            this.router.navigate(['Rendido/Listar']);
          }
        )
      }
    }
}
