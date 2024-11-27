import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'disciplinas', loadChildren: () => import('./disciplinas/disciplinas.module').then(m => m.DisciplinasPageModule) },
  { path: 'notas', loadChildren: () => import('./notas/notas.module').then(m => m.NotasPageModule) },
  { path: 'faltas', loadChildren: () => import('./faltas/faltas.module').then(m => m.FaltasPageModule) },
  { path: 'chamada', loadChildren: () => import('./chamada/chamada.module').then(m => m.ChamadaPageModule) },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
