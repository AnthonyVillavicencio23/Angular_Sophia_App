import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EstudianteService } from 'src/app/service/estudiante.service';



@Component({
  selector: 'app-estudiante-dialog',
  templateUrl: './estudiante-dialog.component.html',
  styleUrls: ['./estudiante-dialog.component.css']
})
export class EstudianteDialogComponent  implements OnInit {
  constructor(private as: EstudianteService,
    private dialogRef: MatDialogRef<EstudianteDialogComponent>) { }


  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.as.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}



