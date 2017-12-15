import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-cadastro-usuario-dialog',
  templateUrl: './cadastro-usuario-dialog.component.html',
  styleUrls: ['./cadastro-usuario-dialog.component.css']
})
export class CadastroUsuarioDialogComponent implements OnInit {
  email: string = '';
  senha: string = '';
  confirmaSenha: string = '';


  constructor(
    public dialogRef: MatDialogRef<CadastroUsuarioDialogComponent>,
    public fire: FireService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  cancelar(){
    this.dialogRef.close();
  }

  salvar(){
    this.fire.cadastrarUsuario(this.email, this.senha)
      .then(user => {
        console.log(user);
        this.snackBar.open('Usuário criado','x',{duration: 3000})
        this.dialogRef.close();
      })
      .catch(err => {
        console.error(err);
        if(err.code = 'auth/invalid-email'){
          alert("Digite um email válido.");
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
