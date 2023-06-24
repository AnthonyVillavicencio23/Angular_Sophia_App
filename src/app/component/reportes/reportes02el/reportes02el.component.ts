import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaPsicoDTO } from 'src/app/model/CitaPsicoDTO';
import { CitaService } from 'src/app/service/cita.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-reportes02el',
  templateUrl: './reportes02el.component.html',
  styleUrls: ['./reportes02el.component.css']
})
export class Reportes02elComponent {
  role:string="";
  countCita: CitaPsicoDTO[] = [];
  dataSource: MatTableDataSource<CitaPsicoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['psicologo','cantidad']

  constructor(private cS: CitaService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.cS.getCountCitaByPsico().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getCountCitaByPsico(): void {
    this.cS.getCountCitaByPsico()
      .subscribe((data: CitaPsicoDTO[]) => {
        this.countCita = data;
      });
  }

}
