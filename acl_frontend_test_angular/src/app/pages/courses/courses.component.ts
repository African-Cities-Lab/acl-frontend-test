import { Component, OnInit } from '@angular/core';
import { Courses } from '../../models/courses.model';
import { HttpService } from '../../services/http.service';
import { FunctionsService } from '../../services/functions.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courseList: Courses[] = [];
  isLoading: boolean = false;
  searchIsActivate: boolean = false;
  
  constructor(private httpService: HttpService, private functions: FunctionsService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
    localStorage.removeItem('courseDetails');
  }
  
  getCourses() {
    this.isLoading = true;
    if (localStorage.getItem('courses') && localStorage.getItem('courses') != undefined) {
      const list = JSON.parse(localStorage.getItem("courses") || "[]");
      this.courseList = this.functions.courseObjectArray(list);
    }
    
    this.httpService.getCourses().subscribe(
      (response: any) => {
        if (response) {
          localStorage.setItem('courses', JSON.stringify(response));
          this.courseList = this.functions.courseObjectArray(response);
          this.isLoading = false;
        }
      },
      (error) => {
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vérifier votre connexion puis réessayée.',
        })
        console.log(error.error);
      }
    );
  }
  
  getCourseDetails(code: string) {
    this.courseList.forEach((course: Courses) => {
      if (course.getCode() == code) {
        localStorage.setItem('courseDetails', JSON.stringify(course));
        
        this.router.navigate(['/courses-details/' + code]);
      }
    });
  }
  
  getAllCourses() {
    this.isLoading = true;
    this.searchIsActivate = false;
    let inputSearch: any = document.getElementById('inputSearch');
    inputSearch.value = '';
    if (localStorage.getItem('courses') && localStorage.getItem('courses') != undefined) {
      const list = JSON.parse(localStorage.getItem("courses") || "[]");
      this.courseList = this.functions.courseObjectArray(list);
    }
    this.isLoading = false;
  }
  
  searchByKeyword() {
    this.searchIsActivate = true;
    const inputSearch: any = document.getElementById('inputSearch');
    const keyword = inputSearch.value;
    const list = this.courseList;
    this.courseList = [];
    
    list.forEach((course: Courses) => {
      const categories = course.getCategories();
      const findInCategory = this.searchInCategories(categories, keyword);
      if (findInCategory || course.getTitle().search(keyword) > 0 || course.getFullDescription().search(keyword) > 0) {
        this.courseList.push(course);
      }
    });
  }
  
  searchInCategories(categories: any[], keyword: string): boolean {
    let find = false;
    categories.forEach((category: any) => {
      if (category.includes(keyword)) {
        find = true;
      }
    });
    
    return find;
  }

}
