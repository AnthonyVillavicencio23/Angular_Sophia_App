import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EspecialidadPsicologoDTO } from 'src/app/model/EspecialidadPsicologoDTO';
import { LoginService } from 'src/app/service/login.service';
import { PsicologoService } from 'src/app/service/psicologo.service';

@Component({
  selector: 'app-reporte02st',
  templateUrl: './reporte02st.component.html',
  styleUrls: ['./reporte02st.component.css']
})
export class Reporte02stComponent {
  role:string="";
  psicologoContar: EspecialidadPsicologoDTO[] = [];
  dataSource: MatTableDataSource<EspecialidadPsicologoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['especialidad', 'psicologo']

  constructor(private pS: PsicologoService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.pS.getContar_mayor_Especialidad().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getContar_mayor_Especialidad(): void {
    this.pS.getContar_mayor_Especialidad()
      .subscribe((data: EspecialidadPsicologoDTO[]) => {
        this.psicologoContar = data;
      });
  }
}
