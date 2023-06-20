import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComprobantePago } from 'src/app/model/comprobantepago';
import { ComprobantepagoService } from 'src/app/service/comprobantepago.service';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { ComprobantepagoDialogoComponent } from './comprobantepago-dialogo/comprobantepago-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-comprobantepago-listar',
  templateUrl: './comprobantepago-listar.component.html',
  styleUrls: ['./comprobantepago-listar.component.css']
})
export class ComprobantepagoListarComponent implements OnInit{
  role:string="";
  lista: ComprobantePago[] = []
  dataSource: MatTableDataSource<ComprobantePago>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumns:string[]=[`id`,`IGV`,`documento`,`ruc`,`razonSocial`,`numBoletaFactura`,`pagoModulo`,`accion01`,`accion2`]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
   this.as.list().subscribe(data=>{
     this.dataSource.paginator = this.paginator;
   })
 }
  constructor(private as: ComprobantepagoService , private dialog: MatDialog,private ls:LoginService)
  {

  }
  ngOnInit(): void
  {
    this.role=this.ls.showRole();
      console.log(this.role);
    this.as.list ().subscribe(data=>
      {
        this.dataSource.paginator = this.paginator;
        this.dataSource=new MatTableDataSource(data);
      })

      this.as.getLista().subscribe(data => {
        this.dataSource.paginator = this.paginator;
        this.dataSource = new MatTableDataSource(data);
      })

      this.as.getConfirmDelete().subscribe(data => {
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
      confirm(id: number) {
        this.idMayor = id;
        this.dialog.open(ComprobantepagoDialogoComponent);
      }
      eliminar(id: number) {
        this.as.delete(id).subscribe(() => {
          this.as.list().subscribe(data => {
            this.as.setList(data);
          })
        })
      }
       filtrar(e:any){
        this.dataSource.filter=e.target.value.trim();
      }

  }


