import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modulo } from 'src/app/model/modulo';
import { moduloService } from 'src/app/service/modulo.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';




@Component({
  selector: 'app-modulo-listar',
  templateUrl: './modulo-listar.component.html',
  styleUrls: ['./modulo-listar.component.css']
})
export class ModuloListarComponent implements OnInit
{

  role:string="";
  lista: Modulo[] = [];
  dataSource: MatTableDataSource<Modulo>=new MatTableDataSource();

  displayedColumns:string[]=[`idModulo`,`curso`,`nombreModulo`]

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit()
    {
    this.as.list().subscribe(data=>{
      this.dataSource.paginator = this.paginator;
    })
    }

  constructor(private as: moduloService, private ls:LoginService)
  {

  }

  ngOnInit(): void {

    this.role=this.ls.showRole();
    console.log(this.role);

    this.loadData();

    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.loadData();


  }

  loadData(): void {
    this.as.getLista().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

}
