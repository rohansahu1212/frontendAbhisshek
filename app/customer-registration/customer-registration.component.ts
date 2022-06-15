import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    let data={
      "cust_name":this.cust_name,
      "dob":this.dob,
      "loginId":this.loginId,
      "password":this.password,
      "address":this.address,
      "email":this.email,
      "state":this.state,
      "city":this.city,
      "mobile":this.mobile,
      "nominee":this.nominee,
      "nomineeRelation":this.nomineeRelation
    }

  }

}
