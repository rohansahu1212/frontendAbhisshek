import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/services/common-service.service';

@Component({
  selector: 'viewPolicyClaim',
  templateUrl: './view-policy-claim.component.html',
  styleUrls: ['./view-policy-claim.component.css']
})
export class ViewPolicyClaimComponent implements OnInit {
  title:string = "View Policy Claim Record"

  data:any[] = [];

  constructor(private service:CommonServiceService) {

   }

  ngOnInit(): void {
    this.getPolicyRecord();
  }

  getPolicyRecord(){
    this.service.getPolicyRecord().subscribe(resp=>{
      console.log(resp);
      this.data = resp;
    })
  }
}
