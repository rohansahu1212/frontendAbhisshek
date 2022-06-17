import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/services/customer.service';

@Component({
  selector: 'customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
username:any;
data:any
  constructor(private route:Router,private service:CustomerService) { }

  ngOnInit(): void {
 
    if(localStorage.getItem("token")==null)
      this.route.navigate(['/customer-login'])

      this.service.userProfile().subscribe((result)=>{
        this.data = result;
        localStorage.setItem('userName',this.data.name)
        this.username=this.data.name;
        console.log(result);
      })

      //this.username = localStorage.getItem('userName')

  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")
    this.route.navigate(['/'])

  }
}
