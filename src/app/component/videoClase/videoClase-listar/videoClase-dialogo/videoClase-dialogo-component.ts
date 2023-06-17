import { Component, OnInit } from '@angular/core';
import { VideoClaseService } from 'src/app/service/videoClase.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-videoclase-dialogo',
  templateUrl: './videoClase-dialogo-component.html',
  styleUrls: ['./videoClase-dialogo-component.css']
})
export class VideoClaseDialogoComponent implements OnInit {
  constructor(private aS: VideoClaseService,
    private dialogRef: MatDialogRef<VideoClaseDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}