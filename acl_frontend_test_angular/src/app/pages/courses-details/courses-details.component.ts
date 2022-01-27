import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsService } from '../../services/functions.service';
import { Courses } from '../../models/courses.model';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {
  course: Courses;

  constructor(private functions: FunctionsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code != undefined && localStorage.getItem('courseDetails') && localStorage.getItem('courseDetails') != undefined) {
      const courseDetails = JSON.parse(localStorage.getItem("courseDetails"));
      this.course = new Courses(courseDetails);
      
    } else {
      this.router.navigate(['/not-found']);
    }
  }
  
  breakText(text: string) {
    let outputText = '';
    for (let index = 0; index < text.length; index++) {
      const element = text[index];
      if (index < 50) {
        outputText += element;
      } else {
        outputText += '...';
        break;
      }
    }
    
    return outputText;
  }

}
