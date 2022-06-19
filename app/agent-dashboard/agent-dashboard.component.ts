import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../services/services/agent.service';

@Component({
  selector: 'agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {

username:any;
agents:any[]=[]

  constructor(private route:Router, private agentService:AgentService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.route.navigate(['/app-home']);
  }
 
}
