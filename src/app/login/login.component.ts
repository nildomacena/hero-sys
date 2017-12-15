import { Component, OnInit } from '@angular/core';
import { FireService } from '../fire.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CadastroUsuarioDialogComponent } from '../cadastro-usuario-dialog/cadastro-usuario-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(
    public dialog: MatDialog,
    public fire: FireService,
    public router: Router
  ){

  }

  ngOnInit() {

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
        this.router.navigate(['home']);

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
