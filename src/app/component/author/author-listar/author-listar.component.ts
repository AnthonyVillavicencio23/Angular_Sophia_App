import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { Author } from "src/app/model/author";
import { AuthorService } from "src/app/service/author.service";
import { LoginService } from "src/app/service/login.service";

@Component({
  selector: 'app-author-listar',
  templateUrl: './author-listar.component.html',
  styleUrls: ['./author-listar.component.css']
})

export class AuthorListarComponent implements OnInit {
  role:string="";
  lista: Author[] = []
  datasource: MatTableDataSource<Author> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['codigo', 'nombre', 'email', 'fecha', 'acciones1', 'acciones2']

  constructor(private aS: AuthorService, private dialog: MatDialog, private ls:LoginService) {

  }
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.aS.list().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.datasource.filter = e.target.value.trim();
  }

}

