import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/service/tutor.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tutor-dialogo',
  templateUrl: './tutor-dialogo.component.html',
  styleUrls: ['./tutor-dialogo.component.css']
})
export class TutorDialogoComponent implements OnInit {
  constructor(private aS: TutorService,
    private dialogRef: MatDialogRef<TutorDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
