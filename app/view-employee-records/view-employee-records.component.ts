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
  constructor(private employeeService:EmployeeService) {
    this.getEmployees()
   }

  ngOnInit(): void {
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      console.log(data)

        this.employees=data
    
    })
  }
  activateEmployee(id:number){
    this.employeeService.activateEmployee(id).subscribe((result)=>{
     
    })
    window.location.href="empRecords";
  }
  
  deactivateEmployee(id:number){
    this.employeeService.deactivateEmployee(id).subscribe((result)=>{
      
    })
    window.location.href="empRecords";
  }
  
  deleteEmployeeById(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe((result)=>{
      
    })
    window.location.href="empRecords";
  }
}
