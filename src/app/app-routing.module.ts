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
import { TarjetaComponent } from './component/tarjeta/tarjeta.component';
import { TarjetaListarComponent } from './component/tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaCreaditaComponent } from './component/tarjeta/tarjeta-creadita/tarjeta-creadita.component';
import { ModsugeridosComponent } from './component/modsugeridos/modsugeridos.component';
import { ModsugeridosListarComponent } from './component/modsugeridos/modsugeridos-listar/modsugeridos-listar.component';
import { ModsugeridosCreaeditaComponent } from './component/modsugeridos/modsugeridos-creaedita/modsugeridos-creaedita.component';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';
import { ModinscritosComponent } from './component/modinscritos/modinscritos.component';
import { ModinscritosListarComponent } from './component/modinscritos/modinscritos-listar/modinscritos-listar.component';
import { ModinscritosCreaeditaComponent } from './component/modinscritos/modinscritos-creaedita/modinscritos-creaedita.component';
import { ModuloListarComponent } from './component/modulo/modulo-listar/modulo-listar.component';

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
      { path: 'Listar', component:EstudianteListarComponent}
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
      { path: 'Listar', component:ModuloListarComponent}
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
    path:'ModuSugeridos',component:ModsugeridosComponent, children:
    [
      { path: 'Listar', component:ModsugeridosListarComponent}
    ]
  },
  {
    path:'ModuSugeridos',component:ModsugeridosComponent, children:
    [
      { path: 'Agregar', component:ModsugeridosCreaeditaComponent}
    ]
  },
  {
    path:'ModuInscritos',component:ModinscritosComponent, children:
    [
      { path: 'Listar', component:ModinscritosListarComponent}
    ]
  },
  {
    path:'ModuInscritos',component:ModinscritosComponent, children:
    [
      { path: 'Agregar', component:ModinscritosCreaeditaComponent}
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
