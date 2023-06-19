import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetaListarComponent } from './tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaCreaditaComponent } from './tarjeta/tarjeta-creadita/tarjeta-creadita.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { cursoComponent } from './curso/curso.component';
import { cursoListarComponent } from './curso/curso-listar/curso-listar.component';
import { CursoCreaeditaComponent } from './curso/curso-creaedita/curso-creaedita.component';
import { PsicologoComponent } from './psicologo/psicologo.component';
import { PsicologoListarComponent } from './psicologo/psicologo-listar/psicologo-listar.component';
import { PsicologoCreaeditaComponent } from './psicologo/psicologo-creaedita/psicologo-creaedita.component';
import { TutorComponent } from './tutor/tutor.component';
import { TutorListarComponent } from './tutor/tutor-listar/tutor-listar.component';
import { TutorCreaeditaComponent } from './tutor/tutor-creaedita/tutor-creaedita.component';
import { CategoriaComponent } from './Categoria/categoria.component';
import { CatListarComponent } from './Categoria/cat-listar/cat-listar.component';
import { CatCreaeditaComponent } from './Categoria/cat-creaedita/cat-creaedita.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudianteCreaeditaComponent } from './estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ModuloCreaeditaComponent } from './modulo/modulo-creaedita/modulo-creaedita.component';
import { CitaComponent } from './cita/cita.component';
import { CitaCreaeditaComponent } from './cita/cita-creaedita/cita-creaedita.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { EvaluacionCreaeditaComponent } from './evaluacion/evaluacion-creaedita/evaluacion-creaedita.component';


const routes: Routes = [
  {
    path:'Tarjeta',component:TarjetaComponent, children:
    [
      { path: 'Listar', component:TarjetaListarComponent},
      { path: 'Agregar', component:TarjetaCreaditaComponent},
      { path: 'Editar/:id', component:TarjetaCreaditaComponent},
    ]
  },
  {
    path:'Estado',component:EstadoComponent, children:
    [
      { path: 'Listar', component:EstadoListarComponent}
    ]
  },
  {
    path:'Curso',component:cursoComponent, children:
    [
      { path: 'Listar', component:cursoListarComponent}
    ]
  },
  {
    path:'Curso',component:cursoComponent, children:
    [
      { path: 'Agregar', component:CursoCreaeditaComponent},
      { path: 'Listar/edicion/:idcurso', component: CursoCreaeditaComponent}
    ]
  },
  {
    path:'Psicologo',component:PsicologoComponent, children:
    [
      { path: 'Listar', component:PsicologoListarComponent}
    ]
  },
  {
    path:'Psicologo',component:PsicologoComponent, children:
    [
      { path: 'Agregar', component:PsicologoCreaeditaComponent},
      { path: 'Listar/edicion/:idPsicologo', component: PsicologoCreaeditaComponent}
    ]
  },
  {
    path:'Tutor',component:TutorComponent, children:
    [
      { path: 'Listar', component:TutorListarComponent}
    ]
  },
  {
    path:'Tutor',component:TutorComponent, children:
    [
      { path: 'Agregar', component:TutorCreaeditaComponent },
      { path: 'Listar/edicion/:idTutor', component:TutorCreaeditaComponent}
    ]
  },
  {
    path:'Citas',component:CategoriaComponent, children:
    [
      { path: 'Listar', component:CatListarComponent}
    ]
  },
  {
    path:'Citas',component:CategoriaComponent, children:
    [
      { path: 'Agregar', component:CatCreaeditaComponent},
      { path: 'Listar/edicion/:idcatCita', component: CatCreaeditaComponent}
    ]
  },
  {
    path:'Estudiantes',component:EstudianteComponent, children:
    [
      { path: 'Listar', component:EstudianteComponent}
    ]
  },
  {
    path:'Estudiantes',component:EstudianteComponent, children:
    [
      { path: 'Agregar', component:EstudianteCreaeditaComponent}
    ]
  },
  {
    path:'Modulos',component:ModuloComponent, children:
    [
      { path: 'Listar', component:ModuloComponent}
    ]
  },
  {
    path:'Modulos',component:ModuloComponent, children:
    [
      { path: 'Agregar', component:ModuloCreaeditaComponent}
    ]
  },
  {
    path:'CitasProgramadas',component:CitaComponent, children:
    [
      { path: 'Listar', component:CitaComponent}
    ]
  },
  {
    path:'CitasProgramadas',component:CitaComponent, children:
    [
      { path: 'Agregar', component:CitaCreaeditaComponent}
    ]
  },
  {
    path:'PruebaEvaluacion', component:EvaluacionComponent, children:
    [
      {path: 'Listar', component:EvaluacionComponent}
    ]
  },
  {
    path:'PruebaEvaluacion', component:EvaluacionComponent, children:
    [
      {path: 'Agregar', component:EvaluacionCreaeditaComponent}
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }
