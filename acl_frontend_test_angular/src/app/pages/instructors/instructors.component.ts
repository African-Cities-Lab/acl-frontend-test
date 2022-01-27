import { Component, OnInit } from '@angular/core';
import { Instructors } from '../../models/instructors.model';
import { FunctionsService } from '../../services/functions.service';
import { HttpService } from '../../services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
  instructorList: Instructors[] = []
  isLoading: boolean = false;

  constructor(private httpService: HttpService, private functions: FunctionsService) { }

  ngOnInit(): void {
    this.getInstructors();
  }

  getInstructors() {
    this.isLoading = true;
    if (localStorage.getItem('instructors') && localStorage.getItem('instructors') != undefined) {
      const list = JSON.parse(localStorage.getItem("instructors") || "[]");

      this.instructorList = this.functions.instructorObjectArray(list);
    }

    this.httpService.getInstructors().subscribe(
      (response: any) => {
        if (response) {
          localStorage.setItem('instructors', JSON.stringify(response));
          this.instructorList = this.functions.instructorObjectArray(response);
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


}
