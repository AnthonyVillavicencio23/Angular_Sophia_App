import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComprobantePago } from 'src/app/model/comprobantepago';
import { ComprobantepagoService } from 'src/app/service/comprobantepago.service';

@Component({
  selector: 'app-comprobantepago-listar',
  templateUrl: './comprobantepago-listar.component.html',
  styleUrls: ['./comprobantepago-listar.component.css']
})
export class ComprobantepagoListarComponent implements OnInit{

  lista: ComprobantePago[] = []
  dataSource: MatTableDataSource<ComprobantePago>=new MatTableDataSource();

  displayedColumns:string[]=[`id`,`IGV`,`documento`,`ruc`,`razonSocial`,`numBoletaFactura`,`pagoModulo`]

  constructor(private as: ComprobantepagoService)
  {

  }


  ngOnInit(): void
  {
    this.as.list ().subscribe(data=>
      {
        this.dataSource=new MatTableDataSource(data);
      })

      this.as.getLista().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });

  }


}
