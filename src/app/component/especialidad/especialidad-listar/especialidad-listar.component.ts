import { Component, OnInit, ViewChild } from '@angular/core';
import { Especialidad } from 'src/app/model/especialidad';
import {MatTableDataSource} from '@angular/material/table'
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { MatDialog } from '@angular/material/dialog'
import { EspecialidadDialogoComponent } from './especialidad-dialogo/especialidad-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-especialidad-listar',
  templateUrl: './especialidad-listar.component.html',
  styleUrls: ['./especialidad-listar.component.css']
})
export class EspecialidadListarComponent implements OnInit
{
  lista:Especialidad[]=[]
  dataSource:MatTableDataSource<Especialidad>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: String[]=['idEspecialidad','nombre','acciones1','acciones2']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void
    {
    this.as.list().subscribe(data=>{
      this.dataSource.paginator = this.paginator;
    })
  }


  constructor(private as:EspecialidadService, private dialog: MatDialog)
 {

 }
  ngOnInit(): void
  {
    this.as.list().subscribe(data=>
      {
        this.dataSource.paginator = this.paginator;
        this.dataSource = new MatTableDataSource(data);
      })

      this.as.getList().subscribe(data=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource=new MatTableDataSource(data);

      })

      this.as.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
      this.loadData();
  }

  loadData(): void {
    this.as.getList().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(EspecialidadDialogoComponent);
  }
  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}