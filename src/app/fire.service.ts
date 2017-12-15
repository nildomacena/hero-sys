import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class FireService {
  auth = this.afAuth.auth;

  constructor(public afAuth: AngularFireAuth) { 
  
  }

  cadastrarUsuario(email: string, senha:string):Promise<any>{
    return this.auth.createUserWithEmailAndPassword(email,senha);
  }

  login(email:string, senha:string):Promise<any>{
    return this.auth.signInWithEmailAndPassword(email,senha);
  }
}
