import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  feedbackUrl:string;

  constructor(private http:HttpClient) {
    this.feedbackUrl="http://localhost:8080/api/v1/customer/"+localStorage.getItem("userId")+"/addFeedback"
  //  http://localhost:8080/api/v1/customer/99/addFeedback
   }
   sendFeedback(data:any){
    console.log(data)
    console.log(this.feedbackUrl);
    const httpHeaders = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem("token") 
    });
    return this.http.post(this.feedbackUrl,data,{headers:httpHeaders});
   }

   addCustomerData(data:any){
      let url = "http://localhost:8080/api/v1/login/addCustomer";
      return this.http.post(url,data);
   }
}
