import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { MainComponent } from './main/main.component';
import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home' ,pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent},

    {path:'themes',children:[
        {path:'',component:MainComponent},
        {path:':themeId',component:CurrentThemeComponent},
    ]},
    {path:'add-theme',component:AddThemeComponent},

    {path:'404',component:ErrorComponent},
    {path:'**',redirectTo:'/404'},

];
