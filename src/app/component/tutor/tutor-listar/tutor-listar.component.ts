import { Component, OnInit, ViewChild } from '@angular/core';
import { Tutor } from 'src/app/model/tutor';
import {MatTableDataSource} from '@angular/material/table'
import { TutorService } from 'src/app/service/tutor.service';
import { TutorDialogoComponent } from './tutor-dialogo/tutor-dialogo.component';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tutor-listar',
  templateUrl: './tutor-listar.component.html',
  styleUrls: ['./tutor-listar.component.css']
})
export class TutorListarComponent implements OnInit {
 lista:Tutor[]=[]
 dataSource:MatTableDataSource<Tutor>=new MatTableDataSource();
 idMayor: number = 0
 displayedColumns:string[]=['id','nombre','Apellido_Paterno','Apellido_Materno','DNI','telefono','Email','Tipo_de_persona','accion01','accion2']
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 ngAfterViewInit() {
  this.aS.list().subscribe(data=>{
    this.dataSource.paginator = this.paginator;
  })
}
 constructor(private aS:TutorService, private dialog: MatDialog){

 }
  ngOnInit(): void {
this.aS.list().subscribe(data=>{
  this.dataSource.paginator = this.paginator;
  this.dataSource=new MatTableDataSource(data);
})

this.aS.getList().subscribe(data=>{
  this.dataSource.paginator = this.paginator;
  this.dataSource=new MatTableDataSource(data);
})

this.aS.getConfirmDelete().subscribe(data => {
  data == true ? this.eliminar(this.idMayor) : false;
})
this.loadData();
}
loadData(): void {
  this.aS.getList().subscribe(data => {
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
  });
}
confirm(id: number) {
  this.idMayor = id;
  this.dialog.open(TutorDialogoComponent);
}
eliminar(id: number) {
  this.aS.delete(id).subscribe(() => {
    this.aS.list().subscribe(data => {
      this.aS.setList(data);
    })
  })
}
 filtrar(e:any){
  this.dataSource.filter=e.target.value.trim();
}
}
