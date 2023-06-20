import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/model/cita';
import * as moment from 'moment';
import { CitaService } from 'src/app/service/cita.service';
import { catCita } from 'src/app/model/catCita';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Estudiante } from 'src/app/model/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { Psicologo } from 'src/app/model/psicologo';
import { PsicologoService } from 'src/app/service/psicologo.service';
import { Estado } from 'src/app/model/estado';
import { EstadoService } from 'src/app/service/estado.service';


@Component({
  selector: 'app-cita-creaedita',
  templateUrl: './cita-creaedita.component.html',
  styleUrls: ['./cita-creaedita.component.css']
})
export class CitaCreaeditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  cita: Cita = new Cita();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  listacat: catCita[] = [];
  idcatCitaSeleccionado: number = 0;
  listaest: Estudiante[]=[];
  idEstudianteSeleccionado: number = 0;
  listapsi: Psicologo[]=[];
  idPsicologoSeleccionado: number = 0;
  listaesta: Estado[]=[];
  idEstadoSeleccionado: number = 0;


  constructor(private cS: CitaService, private router: Router, private caS: CategoriaService,
    private eS: EstudianteService, private pS: PsicologoService, private etS: EstadoService)
  {

  }



  ngOnInit(): void
  {

    this.caS.list().subscribe(data => {this.listacat = data} );
    this.eS.list().subscribe(data => {this.listaest = data} );
    this.pS.list().subscribe(data => {this.listapsi = data} );
    this.etS.list().subscribe(data => {this.listaesta = data} );

    this.form = new FormGroup
    (
      {
        idCita: new FormControl(),
        disponible: new FormControl(),
        fecha: new FormControl(),
        hora: new FormControl(),
        CatCita: new FormControl(),
        Estudiante: new FormControl(),
        Psicologo: new FormControl(),
        Estado: new FormControl(),
      }
    )
  }

  aceptar(): void {
    this.cita.idCita = this.form.value['idCita'];
    this.cita.disponible = this.form.value['disponible'];
    this.cita.fecha = this.form.value['fecha'];
    this.cita.hora = this.form.value['hora'];

    if (this.idcatCitaSeleccionado > 0 && this.idEstudianteSeleccionado > 0 &&
      this.idPsicologoSeleccionado > 0 && this.idEstadoSeleccionado > 0) {
      //catCita
      let a = new catCita();
      a.idcatCita = this.idcatCitaSeleccionado;
      this.cita.catCita = a;

      //Estudiante
      let e = new Estudiante();
      e.idEstudiante = this.idEstudianteSeleccionado;
      this.cita.estudiante = e;

      //Psicologo
      let p = new Psicologo();
      p.idPsicologo = this.idPsicologoSeleccionado;
      this.cita.psicologo = p;

      //Estado
      let t = new Estado();
      t.idEstado = this.idEstadoSeleccionado;
      this.cita.estado = t;

      //Subcribe
      this.cS.insert(this.cita).subscribe(() => {
        this.cS.list().subscribe(data => {
          this.cS.setList(data);
        })
      })
      this.router.navigate(['pages/CitasProgramadas/Listar']);
    }
  }

}
