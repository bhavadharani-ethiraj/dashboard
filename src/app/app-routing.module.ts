import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsWisePage13thComponent } from './students-wise-page13th/students-wise-page13th.component';

const routes: Routes = [
  {path:"",component:StudentsWisePage13thComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
