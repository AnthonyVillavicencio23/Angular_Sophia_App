import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/service/login.service';
import { pruebaXRendidoDTO } from 'src/app/model/pruebaxRendidoDTO';
import { PruebaevaluacionService } from 'src/app/service/pruebaevaluacion.service';
import { NgModule} from '@angular/core';

@Component({
  selector: 'app-reportes01pa',
  templateUrl: './reportes01pa.component.html',
  styleUrls: ['./reportes01pa.component.css']
})
export class Reportes01paComponent implements OnInit{

  role:string="";
  calificacion_contador: pruebaXRendidoDTO[] = [];
  dataSource: MatTableDataSource<pruebaXRendidoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['rendido','cantidad']

  constructor(private mS: PruebaevaluacionService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.mS.contarEvaluacionxRendido().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  contarEvaluacionxRendido(): void {
    this.mS.contarEvaluacionxRendido()
      .subscribe((data: pruebaXRendidoDTO[]) => {
        this.calificacion_contador = data;
      });
  }


}
