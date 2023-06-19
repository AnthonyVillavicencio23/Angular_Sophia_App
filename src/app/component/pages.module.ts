

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
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorListarComponent,
    AuthorCreaeditaComponent,
    EstadoComponent,
    EstadoListarComponent,
    cursoComponent,
    cursoListarComponent,
    CursoCreaeditaComponent,
    PsicologoComponent,
    PsicologoCreaeditaComponent,
    PsicologoListarComponent,
    PsicologoDialogoComponent,
    TutorComponent,
    TutorListarComponent,
    TutorCreaeditaComponent,
    TutorDialogoComponent,
    CategoriaComponent,
    CatListarComponent,
    CatCreaeditaComponent,
    CursoDialogoComponent,
    CatDiialogComponent,
    NavbarComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    EstudianteCreaeditaComponent,
    ModuloComponent,
    ModuloListarComponent,
    ModuloCreaeditaComponent,
    CitaComponent,
    CitaListarComponent,
    CitaCreaeditaComponent,
    EvaluacionComponent,
    EvaluacionListarComponent,
    EvaluacionCreaeditaComponent,
    TarjetaComponent,
    TarjetaListarComponent,
    TarjetaCreaditaComponent,
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
    MatSnackBarModule
  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
