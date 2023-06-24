import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tutor } from 'src/app/model/tutor';

import * as moment from 'moment'
import { TutorService } from 'src/app/service/tutor.service';
import { ActivatedRoute, Router, Params} from '@angular/router'
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-tutor-creaedita',
  templateUrl: './tutor-creaedita.component.html',
  styleUrls: ['./tutor-creaedita.component.css']
})
export class TutorCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  tutor: Tutor = new Tutor();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  idTutor:number=0;
edicion: boolean=false;

  constructor(private aS: TutorService,
    private router: Router,
    private route:ActivatedRoute) {

  }

  tiposPersona: string[] = ['Natural', 'Jurídica'];

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idTutor=data['idTutor'];
      this.edicion=data['idTutor']!=null;
      this.init();
    })
    this.form = new FormGroup({
      idTutor: new FormControl(),
      nombreTutor: new FormControl(),
      apellidoPatTutor: new FormControl(),
      apellidoMatTutor: new FormControl(),
      dniTutor: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl(),
      tipopersona: new FormControl()
    });
  }

  aceptar(): void {
    this.tutor.idTutor = this.form.value['idTutor'];
    this.tutor.nombreTutor = this.form.value['nombreTutor'];
    this.tutor.apellidoPatTutor = this.form.value['apellidoPatTutor'];
    this.tutor.apellidoMatTutor = this.form.value['apellidoMatTutor'];
    this.tutor.dniTutor = this.form.value['dniTutor'];
    this.tutor.telefono = this.form.value['telefono'];
    this.tutor.email = this.form.value['email'];
    this.tutor.tipopersona = this.form.value['tipopersona'];

    if (this.form.value['nombreTutor'].length > 0 &&
      this.form.value['apellidoPatTutor'].length > 0 &&
      this.form.value['apellidoMatTutor'].length > 0 &&
      this.form.value['dniTutor'].length > 0 &&
      this.form.value['telefono'].length > 0 &&
      this.form.value['email'].length > 0 &&
      this.form.value['tipopersona'].length > 0) {

      if(this.edicion){
        //actualice
        this.aS.update(this.tutor).subscribe((data)=>{
         this.aS.list().subscribe(data=>{
          this.aS.setList(data);
         })
        })
      } else{
        this.aS.insert(this.tutor).subscribe(data => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }

      this.router.navigate(['pages/Tutor/Listar']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }

  init(){
    if(this.edicion){
this.aS.listId(this.idTutor).subscribe(data=> {
this.form = new FormGroup({
  idTutor:new FormControl(data.idTutor),
  nombreTutor:new FormControl(data.nombreTutor),
  apellidoPatTutor:new FormControl(data.apellidoPatTutor),
  apellidoMatTutor:new FormControl(data.apellidoMatTutor),
  dniTutor:new FormControl(data.dniTutor),
  telefono:new FormControl(data.telefono),
  email:new FormControl(data.email),
  tipopersona:new FormControl(data.tipopersona),
})
})
    }
  }
}
