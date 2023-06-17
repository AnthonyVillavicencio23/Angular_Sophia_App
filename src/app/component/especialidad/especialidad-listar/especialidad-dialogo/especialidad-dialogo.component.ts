import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-especialidad-dialogo',
  templateUrl: './especialidad-dialogo.component.html',
  styleUrls: ['./especialidad-dialogo.component.css']
})
export class EspecialidadDialogoComponent implements OnInit {
  constructor(private as: EspecialidadService,
    private dialogRef: MatDialogRef<EspecialidadDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.as.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}