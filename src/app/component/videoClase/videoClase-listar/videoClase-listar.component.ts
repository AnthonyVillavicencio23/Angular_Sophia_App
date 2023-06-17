import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Videoclase } from 'src/app/model/videoClase';
import { VideoClaseService } from 'src/app/service/videoClase.service';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { VideoClaseDialogoComponent } from './videoClase-dialogo/videoClase-dialogo-component';


@Component({
  selector: 'app-videoClase-listar',
  templateUrl: './videoClase-listar.component.html',
  styleUrls: ['./videoClase-listar.component.css']
})
export class VideoclaseListarComponent implements OnInit
{
  lista: Videoclase[] = [];
  dataSource: MatTableDataSource<Videoclase>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumns:string[]=[`idVideoClase`,`Modulo`,`descripcion`,`nombreVideo`,`duracionVideo`,'acciones1','acciones2']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void
    {
    this.as.list().subscribe(data=>{
      this.dataSource.paginator = this.paginator;
    })
  }

  constructor(private as: VideoClaseService, private dialog: MatDialog)
  {

  }

  ngOnInit(): void 
  {
    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
    this.loadData();
  }

  loadData(): void {
    this.as.getLista().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(VideoClaseDialogoComponent);
  }
  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}