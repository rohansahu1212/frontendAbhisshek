import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonServiceService {
  constructor(private http: HttpClient) {}

  getInsuranceType() {
    let url = "http://localhost:8080/api/v1/insurance/insuranceType";
    let token = "Bearer " + localStorage.getItem("token");
    const httpHeaders = new HttpHeaders({
      Authorization: token,
    });
    return this.http.get<any[]>(url, { headers: httpHeaders });
  }
  activateCustomer(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/customer/"+id+"/activate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deactivateCustomer(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/customer/"+id+"/deactivate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deleteCustomerById(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/customer/"+id+"/delete";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
}
