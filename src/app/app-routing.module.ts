
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './component/application/post/post.component';
import { AboutComponent } from './component/application/about/about.component';
import { ProjectsComponent } from './component/application/projects/projects.component';
import { ProjectComponent } from './component/application/project/project.component';
import { PostsComponent } from './component/application/posts/posts.component';
import { HomeComponent } from './component/application/home/home.component';
import { DawComponent } from './component/application/daw/daw.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: ':namefile', component: HomeComponent },  
  { path: 'daw', component: DawComponent },  
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:namefile', component: PostsComponent },
  { path: 'project/:id', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
