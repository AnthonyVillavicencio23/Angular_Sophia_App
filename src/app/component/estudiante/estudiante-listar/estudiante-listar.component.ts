import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/model/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { MatDialog } from '@angular/material/dialog'
import { EstudianteDialogComponent } from './estudiante-dialog/estudiante-dialog.component';



@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})
export class EstudianteListarComponent implements OnInit
{

  lista: Estudiante[] = [];
  dataSource: MatTableDataSource<Estudiante>=new MatTableDataSource();

  idMayor: number = 0


  displayedColumns:string[]=[`id`,`Nombre`,`Fecha_nacimiento`,`apellidoPaterno`,`apellidoMaterno`,`dni`,`Tutor`,`accion01`, `acciones2`]

  constructor(private as: EstudianteService, private dialog: MatDialog)
  {

  }

  ngOnInit(): void {
    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }


confirm(idestudiante: number)
{
  this.idMayor = idestudiante;
  this.dialog.open(EstudianteDialogComponent);
}

eliminar(id: number)
{
  this.as.delete(id).subscribe(() => {
    this.as.list().subscribe(data => {
      this.as.setList(data);
    })
  })
}


filtrar(e:any)
{
  this.dataSource.filter = e.target.value.trim();
}

}
