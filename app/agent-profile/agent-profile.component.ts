import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/services/agent.service';

@Component({
  selector: 'agentProfile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {
title:string="PROFILE"
data:any;
  constructor(private service: AgentService) { }

  ngOnInit(): void {
    this.service.userProfile().subscribe((result)=>{
      this.data = result;
      localStorage.setItem('userName',this.data.name)
      console.log(result);
    });
  }

}
