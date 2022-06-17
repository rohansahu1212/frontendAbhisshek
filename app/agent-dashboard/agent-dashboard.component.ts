import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {

username:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.route.navigate(['/app-home']);
  }
}
