import { Component, OnInit, ViewChild } from '@angular/core';
import { curso } from 'src/app/model/curso';
import { MatTableDataSource } from '@angular/material/table';
import { cursoService } from 'src/app/service/curso.service';
import { MatDialog } from '@angular/material/dialog'
import { CursoDialogoComponent } from './curso-dialogo/curso-dialogo.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.css']
})
export class cursoListarComponent implements OnInit
{
  role:string="";
  lista:curso[] = []
  dataSource:MatTableDataSource<curso>=new MatTableDataSource();

  idMayor: number = 0

  displayedColumns:string[]=['idcurso','nombreCurso','CantCurso','accion01','acciones2']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit()
    {
    this.as.list().subscribe(data=>{
      this.dataSource.paginator = this.paginator;
    })
    }


    constructor(private as:cursoService, private dialog: MatDialog, private ls:LoginService)
    {

    }

    ngOnInit(): void
    {
      this.role=this.ls.showRole();
      console.log(this.role);
      this.as.list().subscribe(data=>
        {
          this.dataSource = new MatTableDataSource(data);
        })

        this.as.getList().subscribe(data=>{

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


    confirm(idcurso: number)
    {
      this.idMayor = idcurso;
      this.dialog.open(CursoDialogoComponent);
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

