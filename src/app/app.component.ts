import { FireService } from './fire.service';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CadastroUsuarioDialogComponent } from './cadastro-usuario-dialog/cadastro-usuario-dialog.component';

declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    public dialog: MatDialog,
    public fire: FireService
  ){
    jQuery(".button-collapse").sideNav();
  }

  esqueciSenha(){
    let dialogRef = this.dialog.open(CadastroUsuarioDialogComponent, {
      width: '500px',
      height: '420px',
      hasBackdrop: false
    })
  }

}
