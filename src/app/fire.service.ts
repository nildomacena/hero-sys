import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class FireService {
  auth = this.afAuth.auth;
  public user: any;
  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(user => {
      console.log(user);
      this.user = user;
    })
  }

  cadastrarUsuario(email: string, senha:string):Promise<any>{
    return this.auth.createUserWithEmailAndPassword(email,senha);
  }

  login(email:string, senha:string):Promise<any>{
    return this.auth.signInWithEmailAndPassword(email,senha);
  }

  logout(){
    return this.auth.signOut();
  }
}
