import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modulo } from 'src/app/model/modulo';
import { moduloService } from 'src/app/service/modulo.service';


@Component({
  selector: 'app-modulo-listar',
  templateUrl: './modulo-listar.component.html',
  styleUrls: ['./modulo-listar.component.css']
})
export class ModuloListarComponent implements OnInit
{

  lista: Modulo[] = [];
  dataSource: MatTableDataSource<Modulo>=new MatTableDataSource();

  displayedColumns:string[]=[`idModulo`,`curso`,`nombreModulo`]

  constructor(private as: moduloService)
  {

  }

  ngOnInit(): void {
    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

}