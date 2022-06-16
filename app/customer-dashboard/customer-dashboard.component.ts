import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
username:any;
  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName')
  }

}
