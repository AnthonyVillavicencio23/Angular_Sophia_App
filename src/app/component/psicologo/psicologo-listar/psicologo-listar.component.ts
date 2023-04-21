import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/model/psicologo';
import {MatTableDataSource} from '@angular/material/table'
import { PsicologoService } from 'src/app/service/psicologo.service';

@Component({
  selector: 'app-psicologo-listar',
  templateUrl: './psicologo-listar.component.html',
  styleUrls: ['./psicologo-listar.component.css']
})
export class PsicologoListarComponent implements OnInit
{
  lista:Psicologo[]=[]
  datasource:MatTableDataSource<Psicologo>=new MatTableDataSource();
  displayedColumns: String[]=['id','nombre','apellidopaterno','apellidomaterno','fecha','especialidad']
  constructor(private aS:PsicologoService)
 {

 }
  ngOnInit(): void
  {
    this.aS.list().subscribe(data=>
      {
        this.datasource = new MatTableDataSource(data);
      })

      this.aS.getList().subscribe(data=>{

        this.datasource=new MatTableDataSource(data);

      })
  }

}
