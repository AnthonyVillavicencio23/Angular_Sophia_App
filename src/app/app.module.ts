import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './component/author/author.component';
import { AuthorListarComponent } from './component/author/author-listar/author-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatTableModule } from '@angular/material/table';
import { AuthorCreaeditaComponent } from './component/author/author-creaedita/author-creaedita.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


import { EstadoComponent } from './component/estado/estado.component';
import { EstadoListarComponent } from './component/estado/estado-listar/estado-listar.component'
import { RouterModule } from '@angular/router';
import { cursoComponent } from './component/curso/curso.component';
import { cursoListarComponent } from './component/curso/curso-listar/curso-listar.component';
import { CursoCreaeditaComponent } from './component/curso/curso-creaedita/curso-creaedita.component';
import { PsicologoComponent } from './component/psicologo/psicologo.component';
import { PsicologoCreaeditaComponent } from './component/psicologo/psicologo-creaedita/psicologo-creaedita.component';
import { PsicologoListarComponent } from './component/psicologo/psicologo-listar/psicologo-listar.component';
import { PsicologoDialogoComponent } from './component/psicologo/psicologo-listar/psicologo-dialogo/psicologo-dialogo-component';
import { TutorComponent } from './component/tutor/tutor.component';
import { TutorListarComponent } from './component/tutor/tutor-listar/tutor-listar.component';
import { TutorCreaeditaComponent } from './component/tutor/tutor-creaedita/tutor-creaedita.component';
import { CategoriaComponent } from './component/Categoria/categoria.component';
import { CatListarComponent } from './component/Categoria/cat-listar/cat-listar.component';
import { CatCreaeditaComponent } from './component/Categoria/cat-creaedita/cat-creaedita.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { CursoDialogoComponent } from './component/curso/curso-listar/curso-dialogo/curso-dialogo.component'
import { CatDiialogComponent } from './component/Categoria/cat-listar/cat-diialog/cat-diialog.component'
import { TutorDialogoComponent } from './component/tutor/tutor-listar/tutor-dialogo/tutor-dialogo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavbarComponent } from './component/navbar/navbar.component';

import { MatSelectModule } from '@angular/material/select';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteCreaeditaComponent } from './component/estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { TarjetaComponent } from './component/tarjeta/tarjeta.component';
import { TarjetaListarComponent } from './component/tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaCreaditaComponent } from './component/tarjeta/tarjeta-creadita/tarjeta-creadita.component';


@NgModule({
  declarations: [
    AppComponent,
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
    TarjetaComponent,
    TarjetaListarComponent,
    TarjetaCreaditaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
