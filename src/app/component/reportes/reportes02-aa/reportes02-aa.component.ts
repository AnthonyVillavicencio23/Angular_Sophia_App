import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TarjetaTutorDTO } from 'src/app/model/tarjetaTutorDTO';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-reportes02-aa',
  templateUrl: './reportes02-aa.component.html',
  styleUrls: ['./reportes02-aa.component.css']
})
export class Reportes02AaComponent {
  datasource= new MatTableDataSource();
  columns = ['nombre', 'cantidad']
  constructor(private tS: TarjetaService){}
  ngOnInit(){
    this.tS.getCantidadTarjetasPorTutor().subscribe(
      (data: TarjetaTutorDTO[])=> this.datasource= new MatTableDataSource(data)
    )
  }
}
