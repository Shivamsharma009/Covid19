import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { PostsComponent } from './posts/posts.component';
//import { Http2ServerRequest, Http2ServerResponse } from 'node:http2';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    PostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
