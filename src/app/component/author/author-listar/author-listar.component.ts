import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author';
import {MatTableDataSource} from '@angular/material/table'
import { AuthorService } from 'src/app/service/author.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-author-listar',
  templateUrl: './author-listar.component.html',
  styleUrls: ['./author-listar.component.css']
})
export class AuthorListarComponent implements OnInit
{
  role:string="";
  lista:Author[]=[]
  datasource:MatTableDataSource<Author>=new MatTableDataSource();
  displayedColumns: String[]=['codigo', 'nombre','email','fecha']
  constructor(private aS:AuthorService, private ls:LoginService)
 {

 }
  ngOnInit(): void
  {

    this.role=this.ls.showRole();
    console.log(this.role);
    this.aS.list().subscribe(data=>
      {
        this.datasource = new MatTableDataSource(data);
      })

      this.aS.getList().subscribe(data=>{

        this.datasource=new MatTableDataSource(data);

      })
  }

}
