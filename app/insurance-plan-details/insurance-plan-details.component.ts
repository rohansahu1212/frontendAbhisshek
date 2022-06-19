import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from '../services/services/insurance.service';

@Component({
  selector: 'app-insurance-plan-details',
  templateUrl: './insurance-plan-details.component.html',
  styleUrls: ['./insurance-plan-details.component.css'],
  providers: [InsuranceService]
})
export class InsurancePlanDetailsComponent implements OnInit {
  agentReferralCode:string=""
  insurancePlan:any;
  buttonSubmit:boolean=true;
  noOfYear: string = "";
  amount: string = "";
  months: string = "";
  insurancePlanId:string="";
  installAmt: number = 0;
  insterestAmt: number =0;
  totalAmt: number = 0;

  constructor(private service:InsuranceService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.getInsurancePlanById(params['id']);
      this.insurancePlanId=params['id'];

    })
  }

  ngOnInit(): void {
  }

  getInsurancePlanById(id: number) {
    this.service.getInsurancePlanById(id).subscribe(data => {
      console.log(data)
      this.insurancePlan = data
    })
  }

  interestCalculator() {
    if (this.months.match("1 month")) {
      this.installAmt = (Number(this.amount) / 12) ;
      this.insterestAmt = (Number(this.amount) * this.insurancePlan.profitRatio / 100) ;
      this.totalAmt = (Number(this.amount) + Number(this.amount) * this.insurancePlan.profitRatio/ 100) ;
   
    }

    else if (this.months.match("3 month")) {
      this.installAmt = (Number(this.amount) / 4) ;
      this.insterestAmt = (Number(this.amount) * this.insurancePlan.profitRatio / 100)  ;
      this.totalAmt =(Number(this.amount) + Number(this.amount) * this.insurancePlan.profitRatio / 100) ;
  
    }
    else if (this.months.match("6 month")) {
      this.installAmt = (Number(this.amount) / 2) ;
      this.insterestAmt =(Number(this.amount) * this.insurancePlan.profitRatio / 100) ;
      this.totalAmt = (Number(this.amount) + Number(this.amount) * this.insurancePlan.profitRatio/ 100) ;
   
    }
    else if (this.months.match("1 year")) {
      this.installAmt = (Number(this.amount) / Number(this.noOfYear) * 1);
      this.insterestAmt = (Number(this.amount) * this.insurancePlan.profitRatio / 100)  ;
      this.totalAmt = (Number(this.amount) + Number(this.amount) * this.insurancePlan.profitRatio / 100);

    }
  }

  Submit(){
    var data = { 
      "insurancePlanId": this.insurancePlanId,
    "customerId": localStorage.getItem('userId'),
    "agentId":this.agentReferralCode,
    "amount":this.amount,
    "timeSpan":this.noOfYear,
    "premiumType":this.months
  }


  this.service.getAddPlan(data).subscribe(resp=>{
    console.log(resp)
    alert("Congrats you brought the policy")
  })
   
  }
}
