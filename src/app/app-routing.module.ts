import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoListarComponent } from './component/estado/estado-listar/estado-listar.component';
import { EstadoComponent } from './component/estado/estado.component';
import { cursoComponent } from './component/curso/curso.component';
import { cursoListarComponent } from './component/curso/curso-listar/curso-listar.component';
import { CursoCreaeditaComponent } from './component/curso/curso-creaedita/curso-creaedita.component';
import { PsicologoComponent } from './component/psicologo/psicologo.component';
import { PsicologoCreaeditaComponent } from './component/psicologo/psicologo-creaedita/psicologo-creaedita.component';
import { PsicologoListarComponent } from './component/psicologo/psicologo-listar/psicologo-listar.component';
import { TutorComponent } from './component/tutor/tutor.component';
import { TutorListarComponent } from './component/tutor/tutor-listar/tutor-listar.component';
import { TutorCreaeditaComponent } from './component/tutor/tutor-creaedita/tutor-creaedita.component';
import { CategoriaComponent } from './component/Categoria/categoria.component';
import { CatListarComponent } from './component/Categoria/cat-listar/cat-listar.component';
import { CatCreaeditaComponent } from './component/Categoria/cat-creaedita/cat-creaedita.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteCreaeditaComponent } from './component/estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { ModuloComponent } from './component/modulo/modulo.component';
import { ModuloCreaeditaComponent } from './component/modulo/modulo-creaedita/modulo-creaedita.component';
import { CitaComponent } from './component/cita/cita.component';
import { CitaCreaeditaComponent } from './component/cita/cita-creaedita/cita-creaedita.component';
import { CitaListarComponent } from './component/cita/cita-listar/cita-listar.component';
import { EvaluacionComponent } from './component/evaluacion/evaluacion.component';
import { EvaluacionCreaeditaComponent } from './component/evaluacion/evaluacion-creaedita/evaluacion-creaedita.component';
import { TarjetaComponent } from './component/tarjeta/tarjeta.component';
import { TarjetaListarComponent } from './component/tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaCreaditaComponent } from './component/tarjeta/tarjeta-creadita/tarjeta-creadita.component';

const routes: Routes =
[
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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
