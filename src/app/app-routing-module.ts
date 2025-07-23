import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleDemo } from './lifecycle-demo/lifecycle-demo';

const routes: Routes = [
  {path:'', loadChildren: () => import('./home/home-module').then(m => m.HomeModule)},
  {path:'Login', loadChildren: () => import('./login/login-module').then(m => m.LoginModule)},
  {path:'reactiveForm', loadChildren: () => import('./reactive-forms/reactive-forms-module').then(m => m.ReactiveFormsModule)},
  {path:'LifecycleDemo', component: LifecycleDemo},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
