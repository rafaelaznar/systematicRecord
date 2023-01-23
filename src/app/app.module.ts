import { HomeComponent } from './component/application/home/home.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostComponent } from './component/application/post/post.component';
import { PostsComponent } from './component/application/posts/posts.component';
import { DawComponent } from './component/application/daw/daw.component';


@NgModule({
  declarations: [
    HomeComponent,
    DawComponent,
    AppComponent,
    MenuComponent,
    FooterComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
