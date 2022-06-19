import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../services/services/common-service.service';
import { CustomerService } from '../services/services/customer.service';

@Component({
  selector: 'customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
title:string="customer page"
username:any;
data:any
insuranceTypes:any[]=[]
  constructor(private route:Router,private service:CustomerService, private insuranceService:CommonServiceService) { }

  ngOnInit(): void {
 
    if(localStorage.getItem("token")==null)
      this.route.navigate(['/customer-login'])

      this.service.userProfile().subscribe((result)=>{
        this.data = result;
        localStorage.setItem('userName',this.data.name)
        this.username=this.data.name;
       // console.log(result);
       console.log("insurnace type")
        console.log(this.insuranceTypes)
      })

      //this.username = localStorage.getItem('userName')

      this.getInsuranceTypes()

  }
  
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")
    this.route.navigate(['/'])

  }
  getInsuranceTypes() {
    this.insuranceService.getInsuranceType().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.insuranceTypes.push(el)
      })
    })
  }
}
