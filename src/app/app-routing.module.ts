
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './component/application/post/post.component';
import { AboutComponent } from './component/application/about/about.component';
import { ProjectsComponent } from './component/application/projects/projects.component';
import { ProjectComponent } from './component/application/project/project.component';
import { PostsComponent } from './component/application/posts/posts.component';
import { HomeComponent } from './component/application/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:year', component: PostsComponent },
  { path: 'posts/:year/:month', component: PostsComponent },
  { path: 'posts/:year/:month/:day', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'project/:id', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
