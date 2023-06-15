import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModuloSugeridoService } from 'src/app/service/modulo-sugerido.service';


@Component({
  selector: 'app-modsugeridos-dialog',
  templateUrl: './modsugeridos-dialog.component.html',
  styleUrls: ['./modsugeridos-dialog.component.css']
})
export class ModsugeridosDialogComponent implements OnInit {
  constructor(private as: ModuloSugeridoService,
    private dialogRef: MatDialogRef<ModsugeridosDialogComponent>)
     { }


  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.as.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}




