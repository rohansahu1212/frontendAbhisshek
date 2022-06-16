import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/services/employee.service';

@Component({
  selector: 'empRecords',
  templateUrl: './view-employee-records.component.html',
  styleUrls: ['./view-employee-records.component.css']
})
export class ViewEmployeeRecordsComponent implements OnInit {
title:string="View Employee Records"
employees : any[] = []
  constructor(private service:EmployeeService) {
    this.getEmployees()
   }

  ngOnInit(): void {
  }

  getEmployees() {
    this.service.getEmployees().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.employees.push(el)
      })
    })
  }
}
