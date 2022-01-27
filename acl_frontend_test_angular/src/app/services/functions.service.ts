//import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Courses } from '../models/courses.model';
import { HttpService } from './http.service';
import { Instructors } from '../models/instructors.model';

@Injectable()
export class FunctionsService {

  constructor(private httpService: HttpService) { }

  instructorObjectArray(list: any): Instructors[] {
    const result: Instructors[] = [];
    list.forEach((element: any) => {
      const instructor = new Instructors(element);
      result.push(instructor);
    });

    return result;
  }
  
  courseObjectArray(list: any): Courses[] {
    const result: Courses[] = [];
    list.forEach((element: any) => {
      const courses = new Courses(element);
      result.push(courses);
    });

    return result;
  }
  
  searchCourse(codeCourse: string, courses: Courses[]): Courses {
    courses.forEach((course: Courses) => {
      if (course.getCode() == codeCourse) {
        return course;
      }
      
    });
    return undefined;
  }
}