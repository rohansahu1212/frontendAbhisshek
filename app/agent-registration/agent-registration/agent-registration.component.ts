import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/services/services/agent.service';

@Component({
  selector: 'agentRegistration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {
  title:string="AGENT REGISTRATION";
  id:any;
  constructor(private service:AgentService, private route:Router) { }
  exform:any;

  ngOnInit(): void {
    this.exform=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'qualification':new FormControl(null,Validators.required)
    });
  }

  addAgentData(){
    this.service.addAgentData(this.exform.value).subscribe(result=>{
      this.id = result;
      alert("This is your Auto-Generated Agent-Id: "+this.id.id);
      console.log(result);
      setTimeout(()=>{
        this.route.navigate(['/employee-dashboard']);
      },5000)
    })
    
    this.exform.reset();
  }
}

