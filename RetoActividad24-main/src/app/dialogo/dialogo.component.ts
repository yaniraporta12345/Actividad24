import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { RespuestaComponent } from './respuesta/respuesta.component';
  
export interface DialogData {
  deporte: string;
  name: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {
  deporte: string = "";
  name: string = "";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RespuestaComponent, {
      data: {name: this.name, deporte: this.deporte},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deporte = result;
    });
  }
}
