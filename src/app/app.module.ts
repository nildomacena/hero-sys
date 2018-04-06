import { FireService } from './fire.service';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//AngularFire Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CadastroUsuarioDialogComponent } from './cadastro-usuario-dialog/cadastro-usuario-dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';


const firebaseConfig = {
  apiKey: "AIzaSyBicF0oeyGcCQ5sr8QvNsjg6qphf0Dmjio",
  authDomain: "hero-burguer.firebaseapp.com",
  databaseURL: "https://hero-burguer.firebaseio.com",
  projectId: "hero-burguer",
  storageBucket: "hero-burguer.appspot.com",
  messagingSenderId: "988738797804"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioDialogComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, 'Hero Burguer'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSidenavModule,
  ],
  providers: [
    FireService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CadastroUsuarioDialogComponent,
    LoginComponent
  ]
})
export class AppModule { }
