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



data:any
  constructor(private route:Router,private service:AgentService) { }


  ngOnInit(): void {

    if(localStorage.getItem("token")==null)
    this.route.navigate(['/agent-login'])

    this.service.userProfile().subscribe(resp=>{
      console.log(resp)
      this.data=resp
      this.username=this.data.name
    })
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.route.navigate(['/']);
  }
 
}
