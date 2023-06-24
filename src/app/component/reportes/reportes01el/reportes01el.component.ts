import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaCatDTO as CitaCatDTO } from 'src/app/model/CitaCatDTO';
import { CitaService } from 'src/app/service/cita.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-reportes01el',
  templateUrl: './reportes01el.component.html',
  styleUrls: ['./reportes01el.component.css']
})
export class Reportes01elComponent {
  role:string="";
  countCita: CitaCatDTO[] = [];
  dataSource: MatTableDataSource<CitaCatDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['categoria', 'psicologo','cantidad']

  constructor(private cS: CitaService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.cS.getCountPsicologoByCat().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getCountPsicologoByCat(): void {
    this.cS.getCountPsicologoByCat()
      .subscribe((data: CitaCatDTO[]) => {
        this.countCita = data;
      });
  }

}
