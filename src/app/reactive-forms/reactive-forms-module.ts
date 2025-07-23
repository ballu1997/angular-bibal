import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicForm } from './basic-form/basic-form';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared-module';

const routes: Routes = [
  { path: 'basic-form', component: BasicForm }
];

@NgModule({
  declarations: [
    BasicForm
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class ReactiveFormsModule { }
