import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
    <img [src]="imageUrl" />`,
})

//<h2>{{ title }}</h2>
//     <ul>
//       <li *ngFor="let course of courses">
//         {{ course }}
//       </li>
//     </ul>
export class CoursesComponent {
  title = 'List of Courses';
  imageUrl =
    'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/7/18/w1200X800/MS_Dhoni_PTI.jpg';

  //   //dependency injection
  //   constructor(service: CoursesService) {
  //     //let service = new CourseService();
  //     this.courses = service.getCourses();
  //   }
}
