import { PruebaEvaluacion } from 'src/app/model/pruebaevaluacion';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PruebaevaluacionService } from 'src/app/service/pruebaevaluacion.service';

@Component({
  selector: 'app-pruebaevaluacion-listar',
  templateUrl: './pruebaevaluacion-listar.component.html',
  styleUrls: ['./pruebaevaluacion-listar.component.css']
})
export class PruebaevaluacionListarComponent {
  displayedColumns: string[] = ['idPruebaEvaluacion', 'cita', 'diagnosticoPE', 'calificacionPE','rendido','action1','action2'];
  dataSource = new MatTableDataSource<PruebaEvaluacion>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pE : PruebaevaluacionService, private _snackBar: MatSnackBar) {}

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.pE.getPruebaEvaluaciones().subscribe(
      (pruebaevaluaciones: PruebaEvaluacion[]) =>{
        this.dataSource = new MatTableDataSource(pruebaevaluaciones);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  deletePruebaEvaluacion(idPruebaEvaluacion: number){
    this.pE.deletePruebaEvaluacion(idPruebaEvaluacion).subscribe(
      (pruebaevaluacion : PruebaEvaluacion) => {
        this.loadData()
        this._snackBar.open("Se elimino la prueba de evaluacion " + idPruebaEvaluacion, "Ok")
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
