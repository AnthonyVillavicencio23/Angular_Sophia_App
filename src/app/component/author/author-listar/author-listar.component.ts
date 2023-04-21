import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author';
import {MatTableDataSource} from '@angular/material/table'
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-author-listar',
  templateUrl: './author-listar.component.html',
  styleUrls: ['./author-listar.component.css']
})
export class AuthorListarComponent implements OnInit
{
  lista:Author[]=[]
  datasource:MatTableDataSource<Author>=new MatTableDataSource();
  displayedColumns: String[]=['codigo', 'nombre','email','fecha']
  constructor(private aS:AuthorService)
 {

 }
  ngOnInit(): void
  {
    this.aS.list().subscribe(data=>
      {
        this.datasource = new MatTableDataSource(data);
      })

      this.aS.getList().subscribe(data=>{

        this.datasource=new MatTableDataSource(data);

      })
  }

}
