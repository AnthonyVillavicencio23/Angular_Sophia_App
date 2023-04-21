import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';

import { catCita } from 'src/app/model/catCita';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-cat-creaedita',
  templateUrl: './cat-creaedita.component.html',
  styleUrls: ['./cat-creaedita.component.css']
})
export class CatCreaeditaComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  catcita:catCita = new catCita();
  mensaje: string = "";

  constructor(private cat:CategoriaService, private router:Router)
  {

  }

  ngOnInit(): void {
    this.form=new FormGroup(
      {
        id: new FormControl(),
        nombreCita: new FormControl(),
        descripcionCita: new FormControl()

      });
  }
  aceptar():void
  {
    this.catcita.id=this.form.value['id'];
    this.catcita.nombreCita=this.form.value['nombreCita'];
    this.catcita.descripcionCita=this.form.value['descripcionCita'];
    if(this.form.value['nombreCita'].length > 0 &&
    this.form.value['descripcionCita'].length > 0)
    {
      this.cat.insert(this.catcita).subscribe(data=>
        {
          this.cat.list().subscribe(data=>
            {
              this.cat.setList(data);
            })
        })
      this.router.navigate(['Citas/Listar'])
    } else {
      this.mensaje = "Complete todo los campos obligatorios!!";
    }
  }
}
