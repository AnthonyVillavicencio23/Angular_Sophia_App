import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modulos_Sugeridos } from 'src/app/model/modulos_sugeridos';
import { ModuloSugeridoService } from 'src/app/service/modulo-sugerido.service';

@Component({
  selector: 'app-modsugeridos-listar',
  templateUrl: './modsugeridos-listar.component.html',
  styleUrls: ['./modsugeridos-listar.component.css']
})
export class ModsugeridosListarComponent implements OnInit
{

  lista: Modulos_Sugeridos[] = [];
  dataSource: MatTableDataSource<Modulos_Sugeridos>=new MatTableDataSource();

  displayedColumns:string[]=[`id`,`Prueba`,`Modulo`]

  constructor(private as: ModuloSugeridoService)
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



