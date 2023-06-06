import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evaluacion } from 'src/app/model/evaluacion';
import { EvaluacionService } from 'src/app/service/evaluacion.service';

@Component({
  selector: 'app-evaluacion-listar',
  templateUrl: './evaluacion-listar.component.html',
  styleUrls: ['./evaluacion-listar.component.css']
})
export class EvaluacionListarComponent implements OnInit {

  lista: Evaluacion[] = []
  dataSource: MatTableDataSource<Evaluacion>=new MatTableDataSource();

  displayedColumns:string[]=['id','diagnostico','Cita']

  constructor(private evs: EvaluacionService)
  {

  }

  ngOnInit(): void {

    this.evs.list ().subscribe(data=>
      {
        this.dataSource=new MatTableDataSource(data);
      })

  }

}
