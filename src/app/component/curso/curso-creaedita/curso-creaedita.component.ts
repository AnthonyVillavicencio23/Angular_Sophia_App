import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { curso } from 'src/app/model/curso';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { cursoService } from 'src/app/service/curso.service';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-curso-creaedita',
  templateUrl: './curso-creaedita.component.html',
  styleUrls: ['./curso-creaedita.component.css']
})
export class CursoCreaeditaComponent implements OnInit {
  Form:FormGroup = new FormGroup({});
  curso: curso = new curso();
  mensaje: string = "";

  idcurso: number = 0;
  edicion: boolean = false;


  constructor(private as: cursoService, private router: Router, private route:ActivatedRoute)
  {

  }

  ngOnInit(): void
  {

    this.route.params.subscribe((data: Params) =>
    {
      this.idcurso=data['idcurso'];
      this.edicion=data['idcurso']!=null;
      this.init()
    })

    this.Form = new FormGroup
    (
      {
        idcurso: new FormControl(),
        nombreCurso: new FormControl(),
        cantidadModulos: new FormControl(),
      }
    )

  }

  aceptar():void
  {
    this.curso.idcurso = this.Form.value['idcurso'];
    this.curso.nameCurso = this.Form.value['nombreCurso'];
    this.curso.cantCurso = this.Form.value['cantidadModulos'];


    if(this.Form.value['nombreCurso'].length>0 && this.Form.value['cantidadModulos'].length>0)
    {
      if(this.edicion)
      {
        this.as.update(this.curso).subscribe(()=>
        {
            this.as.list().subscribe(data =>
              {
                this.as.setList(data);
              })
        })
      }else
      {

        this.as.insert(this.curso).subscribe(data=>
        {
          this.as.list().subscribe(data =>
          {
            this.as.setList(data);
          })
        })
      }

      this.router.navigate(['Curso/Listar']);
    }
    else
    {
      this.mensaje = "Complete los campos !!";
    }
  }


  init()
  {
    if(this.edicion)
    {
      this.as.listID(this.idcurso).subscribe(data =>{
          this.Form = new FormGroup({
            idcurso:new FormControl(data.idcurso),
            nombreCurso:new FormControl(data.nameCurso),
            cantidadModulos:new FormControl(data.cantCurso),
          })
        })
      }
    }


}
