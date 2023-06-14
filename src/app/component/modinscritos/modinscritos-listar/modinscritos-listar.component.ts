import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modulos_Inscritos } from 'src/app/model/modulos_inscritos';
import { ModuloInscritoService } from 'src/app/service/modulo-inscrito.service';

@Component({
  selector: 'app-modinscritos-listar',
  templateUrl: './modinscritos-listar.component.html',
  styleUrls: ['./modinscritos-listar.component.css']
})
export class ModinscritosListarComponent implements OnInit
{

  lista: Modulos_Inscritos[] = [];
  dataSource: MatTableDataSource<Modulos_Inscritos>=new MatTableDataSource();

  displayedColumns:string[]=[`id`,`Estado`,`Situacion`,`PruebadeEvaluacion`]

  constructor(private as: ModuloInscritoService)
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






