//import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {

  private baseURL = environment.apiUrl;

  constructor(private httpClient: HttpClient, private router: Router) { }

  getOrganizations() {
    const url = this.baseURL + "/organizations";
    return this.httpClient
      .get<any[]>(url);
  }

  getInstructors() {
    const url = this.baseURL + "/instructors";
    return this.httpClient
      .get<any[]>(url);
  }
  
  getCourses() {
    const url = this.baseURL + "/courses";
    return this.httpClient
      .get<any[]>(url);
  }
}