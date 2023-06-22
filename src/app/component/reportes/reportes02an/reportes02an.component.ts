import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/service/login.service';
import { moduloxCursoDTO } from 'src/app/model/moduloxCursoDTO';
import { moduloService } from 'src/app/service/modulo.service';
@Component({
  selector: 'app-reportes02an',
  templateUrl: './reportes02an.component.html',
  styleUrls: ['./reportes02an.component.css']
})
export class Reportes02anComponent implements OnInit
{
  role:string="";
  modulo_contador: moduloxCursoDTO[] = [];
  dataSource: MatTableDataSource<moduloxCursoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['curso','cantidad']

  constructor(private mS: moduloService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.mS.BuscarCurso_menos_Modulos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  BuscarCurso_menos_Modulos(): void {
    this.mS.BuscarCurso_menos_Modulos()
      .subscribe((data: moduloxCursoDTO[]) => {
        this.modulo_contador = data;
      });
  }

}


