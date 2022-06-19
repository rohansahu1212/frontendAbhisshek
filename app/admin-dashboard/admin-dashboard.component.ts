import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/services/admin.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route:Router,private service:AdminService) { }

  username:any;
  data:any;
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
  
  ngOnInit(): void {
    if(localStorage.getItem("token")==null)
      this.route.navigate(['/admin-login'])

      this.service.userProfile().subscribe(resp=>{
        console.log(resp)
        this.data=resp
        this.username=this.data.name
      })
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")
    this.route.navigate(['/'])

  }
}
