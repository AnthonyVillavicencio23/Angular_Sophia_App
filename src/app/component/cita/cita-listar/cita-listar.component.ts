import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})
export class CitaListarComponent implements OnInit{

  lista: Cita[] = []
  dataSource: MatTableDataSource<Cita>=new MatTableDataSource();

  displayedColumns:string[]=[`id`,`disponible`,`fecha`,`hora`,`catCita`,`estudiante`,`psicologo`,`estado`]

  constructor(private as: CitaService)
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
