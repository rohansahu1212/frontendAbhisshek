import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/services/admin.service';

@Component({
  selector: 'viewInsurancePlan',
  templateUrl: './view-insurance-plan-record.component.html',
  styleUrls: ['./view-insurance-plan-record.component.css']
})
export class ViewInsurancePlanRecordComponent implements OnInit {
title:string="View Insurance Plan Records"
plans:any[]=[]
  constructor(private service:AdminService) {



   }

  ngOnInit(): void {

    this.service.getInsurnacePlanList().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
      
        this.plans.push(el)
      })
    })
    
  }

}
