import { AuthorComponent } from './author/author.component';
import { AuthorListarComponent } from './author/author-listar/author-listar.component';
import { AuthorCreaeditaComponent } from './author/author-creaedita/author-creaedita.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { cursoComponent } from './curso/curso.component';
import { cursoListarComponent } from './curso/curso-listar/curso-listar.component';
import { CursoCreaeditaComponent } from './curso/curso-creaedita/curso-creaedita.component';
import { PsicologoComponent } from './psicologo/psicologo.component';
import { PsicologoCreaeditaComponent } from './psicologo/psicologo-creaedita/psicologo-creaedita.component';
import { PsicologoListarComponent } from './psicologo/psicologo-listar/psicologo-listar.component';
import { PsicologoDialogoComponent } from './psicologo/psicologo-listar/psicologo-dialogo/psicologo-dialogo-component';
import { TutorComponent } from './tutor/tutor.component';
import { TutorListarComponent } from './tutor/tutor-listar/tutor-listar.component';
import { TutorCreaeditaComponent } from './tutor/tutor-creaedita/tutor-creaedita.component';
import { TutorDialogoComponent } from './tutor/tutor-listar/tutor-dialogo/tutor-dialogo.component';
import { CategoriaComponent } from './Categoria/categoria.component';
import { CatListarComponent } from './Categoria/cat-listar/cat-listar.component';
import { CatCreaeditaComponent } from './Categoria/cat-creaedita/cat-creaedita.component';
import { CursoDialogoComponent } from './curso/curso-listar/curso-dialogo/curso-dialogo.component';
import { CatDiialogComponent } from './Categoria/cat-listar/cat-diialog/cat-diialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudianteListarComponent } from './estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteCreaeditaComponent } from './estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ModuloListarComponent } from './modulo/modulo-listar/modulo-listar.component';
import { ModuloCreaeditaComponent } from './modulo/modulo-creaedita/modulo-creaedita.component';
import { CitaComponent } from './cita/cita.component';
import { CitaListarComponent } from './cita/cita-listar/cita-listar.component';
import { CitaCreaeditaComponent } from './cita/cita-creaedita/cita-creaedita.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { EvaluacionListarComponent } from './evaluacion/evaluacion-listar/evaluacion-listar.component';
import { EvaluacionCreaeditaComponent } from './evaluacion/evaluacion-creaedita/evaluacion-creaedita.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetaListarComponent } from './tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaCreaditaComponent } from './tarjeta/tarjeta-creadita/tarjeta-creadita.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EstudianteDialogComponent } from './estudiante/estudiante-listar/estudiante-dialog/estudiante-dialog.component';
import { ComprobantePago } from '../model/comprobantepago';
import { ComprobantepagoComponent } from './comprobantepago/comprobantepago.component';
import { ComprobantepagoListarComponent } from './comprobantepago/comprobantepago-listar/comprobantepago-listar.component';
import { ComprobantepagoCreaeditaComponent } from './comprobantepago/comprobantepago-creaedita/comprobantepago-creaedita.component';
import { ComprobantepagoDialogoComponent } from './comprobantepago/comprobantepago-listar/comprobantepago-dialogo/comprobantepago-dialogo.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EspecialidadListarComponent } from './especialidad/especialidad-listar/especialidad-listar.component';
import { EspecialidadCreaeditaComponent } from './especialidad/especialidad-creaedita/especialidad-creaedita.component';
import { EspecialidadDialogoComponent } from './especialidad/especialidad-listar/especialidad-dialogo/especialidad-dialogo.component';
import { ModinscritosComponent } from './modinscritos/modinscritos.component';
import { ModinscritosListarComponent } from './modinscritos/modinscritos-listar/modinscritos-listar.component';
import { ModinscritosCreaeditaComponent } from './modinscritos/modinscritos-creaedita/modinscritos-creaedita.component';
import { ModinscritosDialogComponent } from './modinscritos/modinscritos-listar/modinscritos-dialog/modinscritos-dialog.component';
import { ModsugeridosComponent } from './modsugeridos/modsugeridos.component';
import { ModsugeridosListarComponent } from './modsugeridos/modsugeridos-listar/modsugeridos-listar.component';
import { ModsugeridosCreaeditaComponent } from './modsugeridos/modsugeridos-creaedita/modsugeridos-creaedita.component';
import { ModsugeridosDialogComponent } from './modsugeridos/modsugeridos-listar/modsugeridos-dialog/modsugeridos-dialog.component';
import { PagodemoduloComponent } from './pagodemodulo/pagodemodulo.component';
import { PagodemoduloListarComponent } from './pagodemodulo/pagodemodulo-listar/pagodemodulo-listar.component';
import { PagodemoduloCreaeditaComponent } from './pagodemodulo/pagodemodulo-creaedita/pagodemodulo-creaedita.component';
import { PagodemoduloDialogoComponent } from './pagodemodulo/pagodemodulo-listar/pagodemodulo-dialogo/pagodemodulo-dialogo.component';
import { PruebaevaluacionComponent } from './pruebaevaluacion/pruebaevaluacion.component';
import { PruebaevaluacionListarComponent } from './pruebaevaluacion/pruebaevaluacion-listar/pruebaevaluacion-listar.component';
import { PruebaevaluacionCreaeditaComponent } from './pruebaevaluacion/pruebaevaluacion-creaedita/pruebaevaluacion-creaedita.component';
import { RendidoComponent } from './rendido/rendido.component';
import { RendidoListarComponent } from './rendido/rendido-listar/rendido-listar.component';
import { RendidoCreaeditaComponent } from './rendido/rendido-creaedita/rendido-creaedita.component';
import { VideoClaseComponent } from './videoClase/videoClase.component';
import { VideoclaseListarComponent } from './videoClase/videoClase-listar/videoClase-listar.component';
import { VideoclaseCreaeditaComponent } from './videoClase/videoClase-creaedita/videoClase-creaedita.component';
import { VideoClaseDialogoComponent } from './videoClase/videoClase-listar/videoClase-dialogo/videoClase-dialogo-component';
import { ReportesComponent } from './reportes/reportes.component';
import { Reportes01AnComponent } from './reportes/reportes01-an/reportes01-an.component';
import { Reportes01AaComponent } from './reportes/reportes01-aa/reportes01-aa.component';
import { Reportes02AaComponent } from './reportes/reportes02-aa/reportes02-aa.component';


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorListarComponent,
    AuthorCreaeditaComponent,
    cursoComponent,
    cursoListarComponent,
    CursoCreaeditaComponent,
    CategoriaComponent,
    CatListarComponent,
    CatCreaeditaComponent,
    CursoDialogoComponent,
    CatDiialogComponent,
    CitaComponent,
    CitaListarComponent,
    CitaCreaeditaComponent,
    ComprobantepagoComponent,
    ComprobantepagoListarComponent,
    ComprobantepagoCreaeditaComponent,
    ComprobantepagoDialogoComponent,
    EspecialidadComponent,
    EspecialidadListarComponent,
    EspecialidadCreaeditaComponent,
    EspecialidadDialogoComponent,
    EstadoComponent,
    EstadoListarComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    EstudianteCreaeditaComponent,
    EstudianteDialogComponent,
    EvaluacionComponent,
    EvaluacionListarComponent,
    EvaluacionCreaeditaComponent,
    ModinscritosComponent,
    ModinscritosListarComponent,
    ModinscritosCreaeditaComponent,
    ModinscritosDialogComponent,
    ModsugeridosComponent,
    ModsugeridosListarComponent,
    ModsugeridosCreaeditaComponent,
    ModsugeridosDialogComponent,
    ModuloComponent,
    ModuloListarComponent,
    ModuloCreaeditaComponent,
    NavbarComponent,
    PagodemoduloComponent,
    PagodemoduloListarComponent,
    PagodemoduloCreaeditaComponent,
    PagodemoduloDialogoComponent,
    PruebaevaluacionComponent,
    PruebaevaluacionListarComponent,
    PruebaevaluacionCreaeditaComponent,
    PsicologoComponent,
    PsicologoCreaeditaComponent,
    PsicologoListarComponent,
    PsicologoDialogoComponent,
    RendidoComponent,
    RendidoListarComponent,
    RendidoCreaeditaComponent,
    TarjetaComponent,
    TarjetaListarComponent,
    TarjetaCreaditaComponent,
    TutorComponent,
    TutorListarComponent,
    TutorCreaeditaComponent,
    TutorDialogoComponent,
    VideoClaseComponent,
    VideoclaseListarComponent,
    VideoclaseCreaeditaComponent,
    VideoClaseDialogoComponent,
    ReportesComponent,
    Reportes01AnComponent,
    Reportes01AaComponent,
    Reportes02AaComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
