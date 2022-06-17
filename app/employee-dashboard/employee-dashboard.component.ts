import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  username:any;
  agentRecords:number=4;
  employeeRecords:number=3;
  customerRecords:number=4;
  customerDocRecords:number=4;
  insuranceTypeRecords:number=5;
  insurancePlanRecords:number=8;
  insuranceAccountRecords:number=8;
  policyPaymentRecords:number=17;
  policyClaimRecords:number=2;
  commissionRecords:number=8;
  queryRecords:number=1;
  stateRecords:number=4;
  insuranceSchemeRecords:number=11;
  cityRecords:number=5;

  constructor(private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")==null)
      this.route.navigate(['/employee-login']);

  }
 
  
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")
    this.route.navigate(['/'])

  }
}
