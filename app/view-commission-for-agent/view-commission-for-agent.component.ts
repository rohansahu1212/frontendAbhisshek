import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/services/admin.service';

@Component({
  selector: 'viewCommission',
  templateUrl: './view-commission-for-agent.component.html',
  styleUrls: ['./view-commission-for-agent.component.css']
})
export class ViewCommissionForAgentComponent implements OnInit {
  title:string = "View All Transactions"
  data:any[]=[]
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.getMasterTransaction().subscribe(resp=>{
  this.data=resp;
  console.log(resp)
    })
  }

}
