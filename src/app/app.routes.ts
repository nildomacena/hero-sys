import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "item-cadastro", component: ItemCadastroComponent },
    { path: "", component: LoginComponent }
]