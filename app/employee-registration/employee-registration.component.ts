import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/services/employee.service';

@Component({
  selector: 'empRegistration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  title: string = "Employee REGISTRATION";
  exform: any;
  id: any;
  constructor(private service: EmployeeService, private route: Router) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }
  addEmployeeData() {
    this.service.addEmployeeData(this.exform.value).subscribe(result => {
      this.id = result;
      alert("This is your Auto-Generated Employee-Id: " + this.id.id);
      console.log(result);
      setTimeout(() => {
        this.route.navigate(['/admin-dashboard']);
      }, 5000)
    })
    this.exform.reset();
  }
}

