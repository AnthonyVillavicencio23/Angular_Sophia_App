import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Videoclase } from 'src/app/model/videoClase';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { VideoClaseService } from 'src/app/service/videoClase.service';
import { moduloService } from 'src/app/service/modulo.service';
import { Modulo } from 'src/app/model/modulo';

@Component({
  selector: 'app-videoClase-creaedita',
  templateUrl: './videoClase-creaedita.component.html',
  styleUrls: ['./videoClase-creaedita.component.css']
})
export class VideoclaseCreaeditaComponent implements OnInit
{
  idVideoClase: number = 0;
  form: FormGroup = new FormGroup({});
  videoc: Videoclase = new Videoclase();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  edicion: boolean = false;

  lista: Modulo[] = [];
  idModuloSeleccionado: number = 0;

  constructor(private eS: VideoClaseService, private router: Router, private route: ActivatedRoute, private tS: moduloService)
  {

  }

  ngOnInit(): void
  {

    this.tS.list().subscribe(data => {this.lista = data});

    this.route.params.subscribe((data: Params) =>
      {
        this.idVideoClase=data['idVideoClase'];
        this.edicion=data['idVideoClase']!=null;
        this.init()
      })

    this.form = new FormGroup(
      {
        idVideoClase: new FormControl(),
        modulo: new FormControl(),
        descripcion: new FormControl(),
        nombreVideo: new FormControl(),
        duracionVideo: new FormControl(),
      }
    )
  }

  aceptar(): void {
    this.videoc.idVideoClase = this.form.value['idVideoClase'];
    this.videoc.modulo.nombreModulo = this.form.value['modulo.nombreModulo'];
    this.videoc.descripcion = this.form.value['descripcion'];
    this.videoc.nombreVideo = this.form.value['nombreVideo'];
    this.videoc.duracionVideo=this.form.value['duracionVideo'];

    if (this.form.value['descripcion'].length>0 && this.form.value['nombreVideo'].length>0 
    && this.form.value['duracionVideo'].length>0) {

      if (this.edicion) {
        this.eS.update(this.videoc).subscribe((data) => {
          this.eS.list().subscribe(data => {
            this.eS.setList(data);
          })
        })
      } else {
        this.eS.insert(this.videoc).subscribe((data)=> {
          this.eS.list().subscribe(data => {
            this.eS.setList(data);
          })
        })
      }
    this.router.navigate(['Videoclase/Listar']);
  } else {
    this.mensaje = "¡Complete los campos!";
  }




    if (this.idModuloSeleccionado>0) {
      let a = new Modulo();
      a.idModulo = this.idModuloSeleccionado;
      this.videoc.modulo=a;
      this.eS.insert(this.videoc).subscribe(() => {
      this.eS.list().subscribe(data => {
            this.eS.setList(data);
          })
        })

      this.router.navigate(['Videoclase/Listar']);

  }
}

init() {
  if (this.edicion) {
    this.eS.listID(this.idVideoClase).subscribe(data => {
      this.form = new FormGroup({
        idVideoClase: new FormControl(data.idVideoClase),
        modulo: new FormControl(data.modulo.nombreModulo),
        descripcion: new FormControl(data.descripcion),
        nombreVideo: new FormControl(data.nombreVideo),
        duracionVideo: new FormControl(data.duracionVideo)
      })
    })
  }
}


}
