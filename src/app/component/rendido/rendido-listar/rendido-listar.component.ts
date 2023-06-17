import { Rendido } from 'src/app/model/rendido';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RendidoService } from 'src/app/service/rendido.service';


@Component({
  selector: 'app-rendido-listar',
  templateUrl: './rendido-listar.component.html',
  styleUrls: ['./rendido-listar.component.css']
})
export class RendidoListarComponent {
  displayedColumns: string[] = ['idRendido', 'nombreRendido','actions'];
  dataSource = new MatTableDataSource<Rendido>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private rE : RendidoService, private _snackBar: MatSnackBar) {}

  ngOnInit(){
    this.loadData();
  }
  loadData(){
    this.rE.getRendidos().subscribe(
      (rendidos: Rendido[]) =>{
        this.dataSource = new MatTableDataSource(rendidos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  deleteRendido(idRendido: number){
    this.rE.deleteRendido(idRendido).subscribe(
      (rendido : Rendido) => {
        this.loadData()
        this._snackBar.open("Se elimino el rendido" + idRendido, "Ok")
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
