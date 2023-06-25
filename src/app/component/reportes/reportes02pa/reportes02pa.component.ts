import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/service/login.service';
import { pruebaXRendidoDTO } from 'src/app/model/pruebaxRendidoDTO';
import { PruebaevaluacionService } from 'src/app/service/pruebaevaluacion.service';

@Component({
  selector: 'app-reportes02pa',
  templateUrl: './reportes02pa.component.html',
  styleUrls: ['./reportes02pa.component.css']
})
export class Reportes02paComponent implements OnInit
{
  role:string="";
  calificacion_contador: pruebaXRendidoDTO[] = [];
  dataSource: MatTableDataSource<pruebaXRendidoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['rendido','cantidad']

  constructor(private mS: PruebaevaluacionService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.mS.BuscarRendido_menos_Evaluacion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  BuscarRendido_menos_Evaluacion(): void {
    this.mS.BuscarRendido_menos_Evaluacion()
      .subscribe((data: pruebaXRendidoDTO[]) => {
        this.calificacion_contador = data;
      });
  }

}
