import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'addInsurancePlan',
  templateUrl: './adding-insurance-plan.component.html',
  styleUrls: ['./adding-insurance-plan.component.css']
})
export class AddingInsurancePlanComponent implements OnInit {
  title:string="Adding Insurance Plan";
  id:number=0;
 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data:any)
  {
   

  }
}
 

