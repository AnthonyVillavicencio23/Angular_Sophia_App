import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { catCita } from 'src/app/model/catCita';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-cat-creaedita',
  templateUrl: './cat-creaedita.component.html',
  styleUrls: ['./cat-creaedita.component.css'],
})
export class CatCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  catcita: catCita = new catCita();
  mensaje: string = '';

  idcatCita: number = 0;
  edicion: boolean = false;

  constructor(private cat: CategoriaService, private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.idcatCita = data['idcatCita'];
      this.edicion =data['idcatCita']!=null;
      this.init();
    })
    this.form = new FormGroup({
      idcatCita: new FormControl(),
      nombreCita: new FormControl(),
      descripcionCita: new FormControl(),
    });
  }
  aceptar(): void {
    this.catcita.idcatCita = this.form.value['idcatCita'];
    this.catcita.nombreCita = this.form.value['nombreCita'];
    this.catcita.descripcionCita = this.form.value['descripcionCita'];
    if (
      this.form.value['nombreCita'].length > 0 &&
      this.form.value['descripcionCita'].length > 0
    ) {
      if(this.edicion){
        //actualice
        this.cat.update(this.catcita).subscribe(()=>{
          this.cat.list().subscribe(data=>{
            this.cat.setList(data);
          })
        })
      }else{
        this.cat.insert(this.catcita).subscribe((data) => {
          this.cat.list().subscribe((data) => {
            this.cat.setList(data);
          });
        });
      }
      this.router.navigate(['Citas/Listar']);
    } else {
      this.mensaje = 'Complete todo los campos obligatorios!!';
    }
  }

  init() {
    if (this.edicion) {
      this.cat.listId(this.idcatCita).subscribe((data) => {
        this.form = new FormGroup({
          idcatCita: new FormControl(data.idcatCita),
          nombreCita: new FormControl(data.nombreCita),
          descripcionCita: new FormControl(data.descripcionCita)
        })
      });
    }
  }
}
