import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-cat-diialog',
  templateUrl: './cat-diialog.component.html',
  styleUrls: ['./cat-diialog.component.css']
})
export class CatDiialogComponent implements OnInit{
    constructor(private cat: CategoriaService,
    private dialogRef: MatDialogRef<CatDiialogComponent>) { }

ngOnInit(): void {}
confirmar(estado: boolean){
  this.cat.setconfirmDelete(estado);
  this.dialogRef.close();
}
}
