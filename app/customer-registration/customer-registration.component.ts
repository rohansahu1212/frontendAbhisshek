import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationService } from '../services/services/customer-registration-service';

@Component({
  selector: 'customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  title:string="CUSTOMER REGISTRATION";
  cust_name:string="";
  dob:string="";
  loginId:string="";
  password:string="";
  address:string="";
  email:string="";
  state:string="";
  city:string="";
  mobile:string="";
  nominee:string="";
  nomineeRelation:string="";
  constructor(private service : CustomerRegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit(data:any)
  {
    console.warn(data);
   //this.service.addCustomer(data);
  }

}
