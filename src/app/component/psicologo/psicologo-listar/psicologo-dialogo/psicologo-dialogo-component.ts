import { Component, OnInit } from '@angular/core';
import { PsicologoService } from 'src/app/service/psicologo.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-psicologo-dialogo',
  templateUrl: './psicologo-dialogo.component.html',
  styleUrls: ['./psicologo-dialogo.component.css']
})
export class PsicologoDialogoComponent implements OnInit {
  constructor(private aS: PsicologoService,
    private dialogRef: MatDialogRef<PsicologoDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}