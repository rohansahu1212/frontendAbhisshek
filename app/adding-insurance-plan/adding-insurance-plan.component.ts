import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/services/admin.service';



@Component({
  selector: 'addInsurancePlan',
  templateUrl: './adding-insurance-plan.component.html',
  styleUrls: ['./adding-insurance-plan.component.css']
})
export class AddingInsurancePlanComponent implements OnInit {
  title:string="Adding Insurance Plan";
  id:number=0;
 
  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(data:any)
  {
   
   console.log(data)
   console.log(this.id)
   this.service.addInsurancePlan(this.id, data).subscribe(resp=>{
    console.log(resp)
    alert("plan added")
   })
  }
}
 

