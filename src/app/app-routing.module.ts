import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainappComponent } from './mainapp/mainapp.component';
import { StationspageComponent } from './stationspage/stationspage.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:"main"
  },
  {
    path:"main",
    component:MainappComponent
  },
  {
    path:"stations",
    component:StationspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
