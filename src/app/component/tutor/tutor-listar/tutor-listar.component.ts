import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/model/tutor';
import {MatTableDataSource} from '@angular/material/table'
import { TutorService } from 'src/app/service/tutor.service';
@Component({
  selector: 'app-tutor-listar',
  templateUrl: './tutor-listar.component.html',
  styleUrls: ['./tutor-listar.component.css']
})
export class TutorListarComponent implements OnInit {
 lista:Tutor[]=[]
 dataSource:MatTableDataSource<Tutor>=new MatTableDataSource();

 displayedColumns:string[]=['id','nombre','Apellido_Paterno','Apellido_Materno','DNI','telefono','Email','Tipo_de_persona','accion01']

 constructor(private aS:TutorService){

 }
  ngOnInit(): void {
this.aS.list().subscribe(data=>{
  this.dataSource=new MatTableDataSource(data);
})

this.aS.getList().subscribe(data=>{
  this.dataSource=new MatTableDataSource(data);
})
}


 filtrar(e:any){
  this.dataSource.filter=e.target.value.trim();
}
}
