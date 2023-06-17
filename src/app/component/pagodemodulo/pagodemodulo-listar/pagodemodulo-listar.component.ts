import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PagoDeModulo } from 'src/app/model/pagodemodulo';
import { PagodemoduloService } from 'src/app/service/pagodemodulo.service';
import { MatDialog } from '@angular/material/dialog'
import { PagodemoduloDialogoComponent } from './pagodemodulo-dialogo/pagodemodulo-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pagodemodulo-listar',
  templateUrl: './pagodemodulo-listar.component.html',
  styleUrls: ['./pagodemodulo-listar.component.css']
})
export class PagodemoduloListarComponent implements OnInit {
  lista:PagoDeModulo[]=[]
  dataSource:MatTableDataSource<PagoDeModulo>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumns:string[]=['id','monto','fecha','pagado','tarjetacredito','modulo','accion01','accion2']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
   this.pS.list().subscribe(data=>{
     this.dataSource.paginator = this.paginator;
   })
 }
 constructor(private pS:PagodemoduloService, private dialog: MatDialog, ){

 }
 ngOnInit(): void {
  this.pS.list().subscribe(data=>{
    this.dataSource.paginator = this.paginator;
    this.dataSource=new MatTableDataSource(data);
  })

  this.pS.getLista().subscribe(data=>{
    this.dataSource.paginator = this.paginator;
    this.dataSource=new MatTableDataSource(data);
  })

  this.pS.getConfirmDelete().subscribe(data => {
    data == true ? this.eliminar(this.idMayor) : false;
  })
  this.loadData();
  }
  loadData(): void {
    this.pS.getLista().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(PagodemoduloDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.delete(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      })
    })
  }
   filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

}
