import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/services/common-service.service';
import { CustomerService } from '../services/services/customer.service';

@Component({
  selector: 'app-insurance-customer-details',
  templateUrl: './insurance-customer-details.component.html',
  styleUrls: ['./insurance-customer-details.component.css'],
  providers: [CommonServiceService]
})
export class InsuranceCustomerDetailsComponent implements OnInit {
  title:string ="Policy Your Brought"
  data:any[]=[]

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.getAccoutById();
  }
  getAccoutById(){
    var id=localStorage.getItem("userId");
    this.service.GetInsurnaceById().subscribe(resp=>{
      console.log(resp)
      this.data=resp;
    })
  }

}
