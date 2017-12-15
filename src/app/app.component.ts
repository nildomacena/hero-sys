import { FireService } from './fire.service';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CadastroUsuarioDialogComponent } from './cadastro-usuario-dialog/cadastro-usuario-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email: string = '';
  senha: string = '';

  constructor(
    public dialog: MatDialog,
    public fire: FireService
  ){

  }

  esqueciSenha(){
    let dialogRef = this.dialog.open(CadastroUsuarioDialogComponent, {
      width: '500px',
      height: '420px',
      hasBackdrop: false
    })
  }

  login(){
    this.fire.login(this.email, this.senha)
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        if(err.code = 'auth/wrong-password'){
          alert("Senha incorreta. Tente novamente");
        }
        else if(err.code = 'auth/user-not-found'){
          alert("Email não encontrado. Verifique se o email está correto");
        }
        else if(err.code = 'auth/invalid-email'){
          alert("Digite um email válido para continuar");
        }
        else{
          alert("Erro ao fazer login. Se as informações estiverem corretas, entre em contato com o administrador do sistema");
        }
      })
  }
}
