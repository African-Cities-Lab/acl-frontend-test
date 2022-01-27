import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses.model';
import { HttpService } from '../../services/http.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  courseList: Courses[] = [];

  constructor(private httpService: HttpService, private functions: FunctionsService) { }

  ngOnInit(): void {
  }
  
}
