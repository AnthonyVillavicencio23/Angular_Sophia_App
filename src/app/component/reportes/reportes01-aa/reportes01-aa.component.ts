import { Component } from '@angular/core';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-reportes01-aa',
  templateUrl: './reportes01-aa.component.html',
  styleUrls: ['./reportes01-aa.component.css']
})
export class Reportes01AaComponent {
  cantidad = 0;
  constructor(private tS: TarjetaService){}
  ngOnInit(){
    this.tS.getCantidadTarjetasCredito().subscribe(
      (data: number)=> this.cantidad = data
    )
  }
}
