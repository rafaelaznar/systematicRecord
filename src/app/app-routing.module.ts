
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':namefile', component: HomeComponent },  
  { path: ':namefolder/:namefile', component: HomeComponent },  
  { path: ':namefolder1/:namefolder2/:namefile', component: HomeComponent },  // only 2 folders deep allowed for now, may be improved later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
