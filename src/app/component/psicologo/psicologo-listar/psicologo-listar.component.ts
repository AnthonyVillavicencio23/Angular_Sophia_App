import { Component, OnInit, ViewChild } from '@angular/core';
import { Psicologo } from 'src/app/model/psicologo';
import {MatTableDataSource} from '@angular/material/table'
import { PsicologoService } from 'src/app/service/psicologo.service';
import { MatDialog } from '@angular/material/dialog'
import { PsicologoDialogoComponent } from './psicologo-dialogo/psicologo-dialogo-component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';




@Component({
  selector: 'app-psicologo-listar',
  templateUrl: './psicologo-listar.component.html',
  styleUrls: ['./psicologo-listar.component.css']
})
export class PsicologoListarComponent implements OnInit
{
  lista:Psicologo[]=[]
  datasource:MatTableDataSource<Psicologo>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: String[]=['id','nombre','apellidopaterno','apellidomaterno','fecha','especialidad','acciones1','acciones2']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit()
    {
    this.aS.list().subscribe(data=>{
      this.datasource.paginator = this.paginator;
    })
    }

  constructor(private aS:PsicologoService, private dialog: MatDialog)
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

      this.aS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })

  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(PsicologoDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.datasource.filter = e.target.value.trim();
  }

}
