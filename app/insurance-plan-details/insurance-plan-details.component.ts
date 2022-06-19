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
  insurancePlan:any;

  constructor(private service:InsuranceService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.getInsurancePlanById(params['id']);
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
}
