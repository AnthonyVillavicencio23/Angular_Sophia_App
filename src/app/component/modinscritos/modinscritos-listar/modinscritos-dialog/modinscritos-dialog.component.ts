import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModuloInscritoService } from 'src/app/service/modulo-inscrito.service';


@Component({
  selector: 'app-modinscritos-dialog',
  templateUrl: './modinscritos-dialog.component.html',
  styleUrls: ['./modinscritos-dialog.component.css']
})
export class ModinscritosDialogComponent implements OnInit {
  constructor(private as: ModuloInscritoService,
    private dialogRef: MatDialogRef<ModinscritosDialogComponent>)
     { }


  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.as.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}


