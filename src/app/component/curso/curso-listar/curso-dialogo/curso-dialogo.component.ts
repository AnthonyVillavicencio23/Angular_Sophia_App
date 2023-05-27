import { Component, OnInit } from '@angular/core';
import { cursoService } from 'src/app/service/curso.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-dialogo',
  templateUrl: './curso-dialogo.component.html',
  styleUrls: ['./curso-dialogo.component.css']
})
export class CursoDialogoComponent implements OnInit {
  constructor(private as: cursoService,
    private dialogRef: MatDialogRef<CursoDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.as.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
