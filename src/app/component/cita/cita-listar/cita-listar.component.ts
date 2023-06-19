import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/service/cita.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})
export class CitaListarComponent implements OnInit{

  role:string="";
  lista: Cita[] = []
  dataSource: MatTableDataSource<Cita>=new MatTableDataSource();

  displayedColumns:string[]=[`id`,`disponible`,`fecha`,`hora`,`catCita`,`estudiante`,`psicologo`,`estado`]

  constructor(private as: CitaService, private ls:LoginService)
  {

  }


  ngOnInit(): void
  {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.as.list ().subscribe(data=>
      {
        this.dataSource=new MatTableDataSource(data);
      })

  }

}
