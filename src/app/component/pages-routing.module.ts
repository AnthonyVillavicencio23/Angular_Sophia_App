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
import { NavbarComponent } from './navbar/navbar.component';
import { ComprobantepagoComponent } from './comprobantepago/comprobantepago.component';
import { ComprobantepagoListarComponent } from './comprobantepago/comprobantepago-listar/comprobantepago-listar.component';
import { RendidoComponent } from './rendido/rendido.component';
import { RendidoListarComponent } from './rendido/rendido-listar/rendido-listar.component';
import { RendidoCreaeditaComponent } from './rendido/rendido-creaedita/rendido-creaedita.component';
import { PruebaevaluacionComponent } from './pruebaevaluacion/pruebaevaluacion.component';
import { PruebaevaluacionListarComponent } from './pruebaevaluacion/pruebaevaluacion-listar/pruebaevaluacion-listar.component';
import { PruebaevaluacionCreaeditaComponent } from './pruebaevaluacion/pruebaevaluacion-creaedita/pruebaevaluacion-creaedita.component';
import { EstudianteListarComponent } from './estudiante/estudiante-listar/estudiante-listar.component';
import { ModuloListarComponent } from './modulo/modulo-listar/modulo-listar.component';
import { CitaListarComponent } from './cita/cita-listar/cita-listar.component';
import { PagodemoduloComponent } from './pagodemodulo/pagodemodulo.component';
import { PagodemoduloCreaeditaComponent } from './pagodemodulo/pagodemodulo-creaedita/pagodemodulo-creaedita.component';
import { ComprobantepagoCreaeditaComponent } from './comprobantepago/comprobantepago-creaedita/comprobantepago-creaedita.component';
import { ModsugeridosComponent } from './modsugeridos/modsugeridos.component';
import { ModsugeridosListarComponent } from './modsugeridos/modsugeridos-listar/modsugeridos-listar.component';
import { ModsugeridosCreaeditaComponent } from './modsugeridos/modsugeridos-creaedita/modsugeridos-creaedita.component';
import { ModinscritosComponent } from './modinscritos/modinscritos.component';
import { ModinscritosListarComponent } from './modinscritos/modinscritos-listar/modinscritos-listar.component';
import { ModinscritosCreaeditaComponent } from './modinscritos/modinscritos-creaedita/modinscritos-creaedita.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EspecialidadListarComponent } from './especialidad/especialidad-listar/especialidad-listar.component';
import { EspecialidadCreaeditaComponent } from './especialidad/especialidad-creaedita/especialidad-creaedita.component';
import { VideoClaseComponent } from './videoClase/videoClase.component';
import { VideoclaseListarComponent } from './videoClase/videoClase-listar/videoClase-listar.component';
import { VideoclaseCreaeditaComponent } from './videoClase/videoClase-creaedita/videoClase-creaedita.component';
import { AuthorComponent } from './author/author.component';
import { AuthorListarComponent } from './author/author-listar/author-listar.component';
import { AuthorCreaeditaComponent } from './author/author-creaedita/author-creaedita.component';
import { ReportesComponent } from './reportes/reportes.component';
import { Reportes01AnComponent } from './reportes/reportes01-an/reportes01-an.component';
import { Reportes02anComponent } from './reportes/reportes02an/reportes02an.component';
import { Reportes01elComponent } from './reportes/reportes01el/reportes01el.component';
import { Reportes02elComponent } from './reportes/reportes02el/reportes02el.component';
import { Reporte01stComponent } from './reportes/reporte01st/reporte01st.component';


const routes: Routes = [
  {
    path:'Navbar', component:NavbarComponent
  },
  {
    path:'autores', component:AuthorComponent, children:
    [
      {
        path: 'Listar', component:AuthorListarComponent
      },
      {
        path:'Agregar', component: AuthorCreaeditaComponent
      }
    ]
  },
  {
    path:'Tarjeta',component:TarjetaComponent, children:
    [
      { path: 'Listar', component:TarjetaListarComponent},
      { path: 'Agregar', component:TarjetaCreaditaComponent},
      { path: 'Editar/:id', component:TarjetaCreaditaComponent},
    ]
  },
  {
    path:'Rendido',component:RendidoComponent, children:
    [
      { path: 'Listar', component:RendidoListarComponent},
      { path: 'Agregar', component:RendidoCreaeditaComponent},
      { path: 'Editar/:id', component:RendidoCreaeditaComponent},
    ]
  },
  {
    path:'PruebaEvaluacion',component:PruebaevaluacionComponent, children:
    [
      { path: 'Listar', component:PruebaevaluacionListarComponent},
      { path: 'Agregar', component:PruebaevaluacionCreaeditaComponent},
      { path: 'Editar/:id', component:PruebaevaluacionCreaeditaComponent},
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
      { path: 'Agregar', component:EstudianteCreaeditaComponent},
      { path: 'Listar/edicion/:idEstudiante', component: EstudianteCreaeditaComponent}
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
      { path: 'Listar', component:CitaListarComponent}
    ]
  },
  {
    path:'CitasProgramadas',component:CitaComponent, children:
    [
      { path: 'Agregar', component:CitaCreaeditaComponent}
    ]
  },
  {
    path:'PagoDeModulo',component:PagodemoduloComponent, children:
    [
      { path: 'Listar', component:PagodemoduloComponent}
    ]
  },
  {
    path:'PagoDeModulo',component:PagodemoduloComponent, children:
    [
      { path: 'Agregar', component:PagodemoduloCreaeditaComponent},
      { path: 'Listar/edicion/:idPagodeModulo', component: PagodemoduloCreaeditaComponent }


    ]
  },
  {
    path:'ComprobantePago',component:ComprobantepagoComponent, children:
    [
      { path: 'Listar', component:ComprobantepagoComponent}
    ]
  },
  {
    path:'ComprobantePago',component:ComprobantepagoComponent, children:
    [
      { path: 'Agregar', component:ComprobantepagoCreaeditaComponent},
      { path: 'Listar/edicion/:idComprobantePago', component: ComprobantepagoCreaeditaComponent }
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
      { path: 'Agregar', component:ModsugeridosCreaeditaComponent},
      { path: 'Listar/edicion/:idModulosSugeridos', component: ModsugeridosCreaeditaComponent}
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
      { path: 'Agregar', component:ModinscritosCreaeditaComponent},
      { path: 'Listar/edicion/:idModulosInscritos', component: ModinscritosCreaeditaComponent}
    ]
  },
  {
    path:'Especialidad',component:EspecialidadComponent, children:
    [
      { path: 'Listar', component:EspecialidadListarComponent}
    ]
  },
  {
    path:'Especialidad',component:EspecialidadComponent, children:
    [
      { path: 'Agregar', component:EspecialidadCreaeditaComponent},
      { path: 'Listar/edicion/:idEspecialidad', component: EspecialidadCreaeditaComponent}
    ]
  },
  {
    path:'Videoclase',component:VideoClaseComponent, children:
    [
      { path: 'Listar', component:VideoclaseListarComponent}
    ]
  },
  {
    path:'Videoclase',component:VideoClaseComponent, children:
    [
      { path: 'Agregar', component:VideoclaseCreaeditaComponent},
      { path: 'Listar/edicion/:idVideoClase', component: VideoclaseCreaeditaComponent}
    ]
  },
  {
    path:'reportes',component:ReportesComponent,children:[

    { path: 'modulo-contar-curso', component: Reportes01AnComponent },
    { path: 'modulo-menos-cursos', component: Reportes02anComponent },
    { path: 'modulo-contar-citasByCat', component: Reportes01elComponent},
    { path: 'modulo-contar-citasByPsico', component: Reportes02elComponent},
    { path: 'modulo-contar-psicoByEspe', component: Reporte01stComponent},
  ]
  }



]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }
