import { Component, OnInit } from '@angular/core';
import { ComprobantepagoService } from 'src/app/service/comprobantepago.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-comprobantepago-dialogo',
  templateUrl: './comprobantepago-dialogo.component.html',
  styleUrls: ['./comprobantepago-dialogo.component.css']
})
export class ComprobantepagoDialogoComponent implements OnInit{
  constructor(private as: ComprobantepagoService,
    private dialogRef: MatDialogRef<ComprobantepagoDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.as.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
