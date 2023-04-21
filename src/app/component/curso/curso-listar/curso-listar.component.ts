import { Component, OnInit } from '@angular/core';
import { curso } from 'src/app/model/curso';
import { MatTableDataSource } from '@angular/material/table';
import { cursoService } from 'src/app/service/curso.service';


@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.css']
})
export class cursoListarComponent implements OnInit
{

  lista:curso[] = []
  dataSource:MatTableDataSource<curso>=new MatTableDataSource();

  displayedColumns:string[]=['id','nombreCurso','CantCurso','accion01']

    constructor(private as:cursoService)
    {

    }

    ngOnInit(): void
    {
      this.as.list().subscribe(data=>
        {
          this.dataSource = new MatTableDataSource(data);
        })

        this.as.getList().subscribe(data=>{

          this.dataSource=new MatTableDataSource(data);

        })
    }

    filtrar(e:any)
    {
      this.dataSource.filter = e.target.value.trim();
    }


}

