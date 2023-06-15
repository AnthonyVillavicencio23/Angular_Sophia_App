import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modulos_Sugeridos } from 'src/app/model/modulos_sugeridos';
import { ModuloSugeridoService } from 'src/app/service/modulo-sugerido.service';
import { MatDialog } from '@angular/material/dialog'
import { ModsugeridosDialogComponent } from './modsugeridos-dialog/modsugeridos-dialog.component';

@Component({
  selector: 'app-modsugeridos-listar',
  templateUrl: './modsugeridos-listar.component.html',
  styleUrls: ['./modsugeridos-listar.component.css']
})
export class ModsugeridosListarComponent implements OnInit
{

  lista: Modulos_Sugeridos[] = [];
  dataSource: MatTableDataSource<Modulos_Sugeridos>=new MatTableDataSource();

  idMayor: number = 0


  displayedColumns:string[]=[`id`,`Prueba`,`Modulo`,`accion01`,'acciones2']

  constructor(private as: ModuloSugeridoService, private dialog: MatDialog)
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




confirm(idmodusegerido: number)
{
  this.idMayor = idmodusegerido;
  this.dialog.open(ModsugeridosDialogComponent);
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



