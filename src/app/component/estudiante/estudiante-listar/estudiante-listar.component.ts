import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/model/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { MatDialog } from '@angular/material/dialog'
import { EstudianteDialogComponent } from './estudiante-dialog/estudiante-dialog.component';
import { LoginService } from 'src/app/service/login.service';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})
export class EstudianteListarComponent implements OnInit
{
  role:string="";
  lista: Estudiante[] = [];
  dataSource: MatTableDataSource<Estudiante>=new MatTableDataSource();

  idMayor: number = 0


  displayedColumns:string[]=['id','Nombre','Fecha_nacimiento','apellidoPaterno','apellidoMaterno','dni','Tutor','accion01', 'acciones2']

  ngAfterViewInit() {
    this.as.list().subscribe(data=>{
      this.dataSource.paginator = this.paginator;
    })
  }
  constructor(private as: EstudianteService, private dialog: MatDialog, private ls:LoginService)
  {

  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.role=this.ls.showRole();
      console.log(this.role);
    this.as.list().subscribe(data => {
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getLista().subscribe(data => {
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(data);

    });this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
    this.loadData();
  }
  loadData(): void {
    this.as.getLista().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

confirm(idestudiante: number)
{
  this.idMayor = idestudiante;
  this.dialog.open(EstudianteDialogComponent);
}

eliminar(id: number)
{
  this.as.delete(id).subscribe(() => {
    this.as.list().subscribe(data => {
      this.as.setList(data);
    })
  })
}


filtrar(e:any)
{
  this.dataSource.filter = e.target.value.trim();
}

}
