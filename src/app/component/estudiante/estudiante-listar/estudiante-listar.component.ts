import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/model/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';


@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})
export class EstudianteListarComponent implements OnInit
{

  lista: Estudiante[] = []
  dataSource: MatTableDataSource<Estudiante>=new MatTableDataSource();

  displayedColumns:string[]=[`id`,`Nombre`,`Fecha_nacimiento`,`apellidoPaterno`,`apellidoMaterno`,`dni`,`tutor`]

  constructor(private as: EstudianteService)
  {

  }


  ngOnInit(): void
  {
    this.as.list ().subscribe(data=>
      {
        this.dataSource=new MatTableDataSource(data);
      })

  }

}
