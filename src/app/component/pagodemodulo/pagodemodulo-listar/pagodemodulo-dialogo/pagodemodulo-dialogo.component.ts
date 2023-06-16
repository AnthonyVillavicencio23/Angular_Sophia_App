import { Component, OnInit } from '@angular/core';
import { PagodemoduloService } from 'src/app/service/pagodemodulo.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pagodemodulo-dialogo',
  templateUrl: './pagodemodulo-dialogo.component.html',
  styleUrls: ['./pagodemodulo-dialogo.component.css']
})
export class PagodemoduloDialogoComponent implements OnInit{
  constructor(private as: PagodemoduloService,
    private dialogRef: MatDialogRef<PagodemoduloDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.as.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
