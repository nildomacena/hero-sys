import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FireService {
  auth = this.afAuth.auth;
  public user: any;
  constructor(public afAuth: AngularFireAuth, public af: AngularFirestore) { 
    this.afAuth.authState.subscribe(user => {
      console.log(user);
      this.user = user;
    })
  }

  getAbas():Promise<any>{
    return this.af.collection('abas').snapshotChanges().first().toPromise()
              .then(snap => {
                return Promise.resolve(this.snapshotParaValue(snap));
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

  snapshotParaValue(lista){
    let novaLista = [];
    lista.map(objeto => {
      let novoObjeto = {};
      novoObjeto['key'] = objeto.payload.doc.id;
      let val = objeto.payload.doc.data();
      Object.keys(val).map(key => {
        novoObjeto[key] = val[key]
      });
      novaLista.push(novoObjeto);
    });
    return novaLista;
  }
}
