import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/services/login.service';



@Component({
  selector: 'customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  token:any=[];
  constructor(private service:LoginService, private route:Router) { }

  ngOnInit(): void {
  }


getUserFormData(data:any){
  console.log(data);
  this.service.loginUser(data).subscribe(user=>{
    this.token=user
    console.log(this.token.token)
    localStorage.setItem("token",this.token.token);
    this.route.navigate(['/customer-dashboard'])
  })
}

}

