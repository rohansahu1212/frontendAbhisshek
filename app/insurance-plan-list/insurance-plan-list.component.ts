import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from '../services/services/insurance.service';


@Component({
  selector: 'app-insurance-plan-list',
  templateUrl: './insurance-plan-list.component.html',
  styleUrls: ['./insurance-plan-list.component.css'],
  providers: [InsuranceService]
})
export class InsurancePlanListComponent implements OnInit {
  insurancePlans: any[] = []

  constructor(private activatedRoute: ActivatedRoute, private service: InsuranceService, private route:Router) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.getPlansByTypeId(params['id'])
    })

  }

  ngOnInit(): void {
  }

  getPlansByTypeId(id: number) {
    this.service.getInsurancePlanByTypeId(id).subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.insurancePlans.push(el)
      })
    })
  }

  logout() {
    localStorage.clear();
    this.route.navigate(["/"]);
  }
}
