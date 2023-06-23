import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/service/login.service';
import { moduloxCursoDTO } from 'src/app/model/moduloxCursoDTO';
import { moduloService } from 'src/app/service/modulo.service';
import { NgModule} from '@angular/core';


@Component({
  selector: 'app-reportes01-an',
  templateUrl: './reportes01-an.component.html',
  styleUrls: ['./reportes01-an.component.css']
})
export class Reportes01AnComponent implements OnInit
{
  role:string="";
  modulo_contador: moduloxCursoDTO[] = [];
  dataSource: MatTableDataSource<moduloxCursoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['curso','cantidad']

  constructor(private mS: moduloService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.mS.contarModulosxCursos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  contarModulosxCursos(): void {
    this.mS.contarModulosxCursos()
      .subscribe((data: moduloxCursoDTO[]) => {
        this.modulo_contador = data;
      });
  }

}

