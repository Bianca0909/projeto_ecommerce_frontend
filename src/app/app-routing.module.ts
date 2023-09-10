import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: MenuComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
