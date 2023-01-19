import { HomeComponent } from './component/shared/routed/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './component/application/post/post.component';
import { AboutComponent } from './component/application/about/about.component';
import { ProjectsComponent } from './component/application/projects/projects.component';
import { ProjectComponent } from './component/application/project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'post/:year/:month:/:day', component: PostComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'project/:id', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
