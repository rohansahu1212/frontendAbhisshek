import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
username:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName')
    if(localStorage.getItem("token")==null)
      this.route.navigate(['/customer-login'])
  }
  
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")
    this.route.navigate(['/'])

  }
}
