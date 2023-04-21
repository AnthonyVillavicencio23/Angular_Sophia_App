import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import {MatTableDataSource} from '@angular/material/table'
import { EstadoService } from 'src/app/service/estado.service';
@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.css']
})
export class EstadoListarComponent implements OnInit{

  lista:Estado[]=[]
  dataSource:MatTableDataSource<Estado>=new MatTableDataSource();
  displayedColumns:string[]=['id','description']
  constructor(private eS:EstadoService){

  }
  ngOnInit(): void {
    this.eS.list().subscribe(estado=>{
      this.dataSource= new MatTableDataSource(estado);
    })

    this.eS.getList().subscribe(estado=>{

      this.dataSource=new MatTableDataSource(estado);

    })
  }

}
