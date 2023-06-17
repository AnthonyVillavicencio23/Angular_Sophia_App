import { Tarjeta } from './../../../model/tarjeta';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-listar',
  templateUrl: './tarjeta-listar.component.html',
  styleUrls: ['./tarjeta-listar.component.css']
})
export class TarjetaListarComponent {
  displayedColumns: string[] = ['idTarjeta', 'numeroTarjeta', 'tipoTarjeta', 'tutor','action1','action2'];
  dataSource = new MatTableDataSource<Tarjeta>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private aT : TarjetaService, private _snackBar: MatSnackBar) {}

  ngOnInit(){
    this.loadData();
    console.log("fdsfsdf")
  }

  loadData(){
    this.aT.getTarjetas().subscribe(
      (tarjetas: Tarjeta[]) =>{
        this.dataSource = new MatTableDataSource(tarjetas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  deleteTarjeta(idTarjeta: number){
    this.aT.deleteTarjeta(idTarjeta).subscribe(
      (tarjeta : Tarjeta) => {
        this.loadData()
        this._snackBar.open("Se elimino la tarjeta " + idTarjeta, "Ok")
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

