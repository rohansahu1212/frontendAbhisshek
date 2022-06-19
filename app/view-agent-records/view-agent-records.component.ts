import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../services/services/agent.service';

@Component({
  selector: 'viewAgents',
  templateUrl: './view-agent-records.component.html',
})
export class ViewAgentRecordsComponent implements OnInit {
  title: string = "VIEW AGENT RECORDS"
  username:any

 
  agents:any[]=[]

  constructor(private route:Router, private agentService:AgentService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
    this.getAgents()
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.route.navigate(['/app-home']);
  }
  getAgents() {
    this.agentService.getAgents().subscribe(data => {
    this.agents= data;
    console.log(data)
    })
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  activateAgent(id:number){
    this.agentService.activateAgent(id).subscribe((result)=>{
     
    })
    window.location.href="viewAgents";
  }
  
  deactivateAgent(id:number){
    this.agentService.deactivateAgent(id).subscribe((result)=>{
      
    })
    window.location.href="viewAgents";
  }

  deleteAgentById(id:number){
    this.agentService.deleteAgentById(id).subscribe((result)=>{
      
    })
    window.location.href="viewAgents";
  }
}
