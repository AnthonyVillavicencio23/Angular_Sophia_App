import { Component, OnInit, ViewChild } from '@angular/core';
import { catCita } from 'src/app/model/catCita';
import { MatTableDataSource } from '@angular/material/table'
import { CategoriaService } from 'src/app/service/categoria.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CatDiialogComponent } from './cat-diialog/cat-diialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-cat-listar',
  templateUrl: './cat-listar.component.html',
  styleUrls: ['./cat-listar.component.css']
})
export class CatListarComponent implements OnInit {

  role:string="";
  lista: catCita[] = []
  dataSource:MatTableDataSource<catCita>=new MatTableDataSource();
  idMayor: number =0;
  displayedColumns: String[] = ['id','nombreCita','descripcionCita','accionCat','accionCat02']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor (private cat:CategoriaService, private dialog: MatDialog, private ls:LoginService)
  {

  }
  ngOnInit(): void
  {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.cat.list().subscribe(data=>
      {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })

    this.cat.getList().subscribe(data=>
      {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    this.cat.getConfirmDelete().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor) : false;
      this.dataSource.paginator = this.paginator;
    })

  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(CatDiialogComponent);
  }
  eliminar(id: number) {
    this.cat.delete(id).subscribe(() => {
      this.cat.list().subscribe(data => {
        this.cat.setList(data);
      })
    })
  }
  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }
}
