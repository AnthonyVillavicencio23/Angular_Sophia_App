import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EspecialidadPsicologoDTO } from 'src/app/model/EspecialidadPsicologoDTO';
import { LoginService } from 'src/app/service/login.service';
import { PsicologoService } from 'src/app/service/psicologo.service';

@Component({
  selector: 'app-reporte01st',
  templateUrl: './reporte01st.component.html',
  styleUrls: ['./reporte01st.component.css']
})
export class Reporte01stComponent {
  role:string="";
  psicologoContar: EspecialidadPsicologoDTO[] = [];
  dataSource: MatTableDataSource<EspecialidadPsicologoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['especialidad', 'psicologo','cantidad']

  constructor(private pS: PsicologoService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.pS.getContarPsicologoByEspecialidad().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getContarPsicologoByEspecialidad(): void {
    this.pS.getContarPsicologoByEspecialidad()
      .subscribe((data: EspecialidadPsicologoDTO[]) => {
        this.psicologoContar = data;
      });
  }

}
