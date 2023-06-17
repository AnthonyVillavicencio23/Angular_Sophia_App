import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modulos_Inscritos } from 'src/app/model/modulos_inscritos';
import { ModuloInscritoService } from 'src/app/service/modulo-inscrito.service';
import { MatDialog } from '@angular/material/dialog'
import { ModinscritosDialogComponent } from './modinscritos-dialog/modinscritos-dialog.component';


@Component({
  selector: 'app-modinscritos-listar',
  templateUrl: './modinscritos-listar.component.html',
  styleUrls: ['./modinscritos-listar.component.css']
})
export class ModinscritosListarComponent implements OnInit
{

  lista: Modulos_Inscritos[] = [];
  dataSource: MatTableDataSource<Modulos_Inscritos>=new MatTableDataSource();

  idMayor: number = 0


  displayedColumns:string[]=[`id`,`Estado`,`Situacion`,`idmodsuge`, `nombremodulo`, `accion01`,`acciones2`]

  constructor(private as: ModuloInscritoService, private dialog: MatDialog)
  {

  }

  ngOnInit(): void
  {
    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }



confirm(idmoduinscrito: number)
{
  this.idMayor = idmoduinscrito;
  this.dialog.open(ModinscritosDialogComponent);
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






