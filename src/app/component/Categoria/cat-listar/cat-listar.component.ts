import { Component, OnInit } from '@angular/core';
import { catCita } from 'src/app/model/catCita';
import { MatTableDataSource } from '@angular/material/table'
import { CategoriaService } from 'src/app/service/categoria.service';


@Component({
  selector: 'app-cat-listar',
  templateUrl: './cat-listar.component.html',
  styleUrls: ['./cat-listar.component.css']
})
export class CatListarComponent implements OnInit {

  lista: catCita[] = []
  dataSource:MatTableDataSource<catCita>=new MatTableDataSource();
  displayedColumns: String[] = ['id','nombreCita','descripcionCita']
  constructor (private cat:CategoriaService)
  {

  }
  ngOnInit(): void
  {
    this.cat.list().subscribe(data=>
      {
        this.dataSource = new MatTableDataSource(data);
      })

    this.cat.getList().subscribe(data=>
      {
        this.dataSource = new MatTableDataSource(data);
      })
  }
}
