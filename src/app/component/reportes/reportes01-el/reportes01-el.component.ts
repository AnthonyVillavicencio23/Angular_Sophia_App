import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { citaPsicoDTO } from 'src/app/model/citaPsicoDTO';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-reportes01-el',
  templateUrl: './reportes01-el.component.html',
  styleUrls: ['./reportes01-el.component.css']
})
export class Reportes01ElComponent implements OnInit{

  citaCounts: citaPsicoDTO[] = [];
  dataSource: MatTableDataSource<citaPsicoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['psicologo','categoria','cantidad']

  constructor(private cS: CitaService) { }

  ngOnInit(): void {
    this.cS.getCountPsicologoByCat().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getCountPsicologoByCat(): void {
    this.cS.getCountPsicologoByCat()
      .subscribe((data: citaPsicoDTO[]) => {
        this.citaCounts = data;
      });
  }
}
