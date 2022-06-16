import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  viewFeedback() {
    let url = "http://localhost:8080/api/v1/feedback"
    let token = "Bearer " + localStorage.getItem("token")
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
  getInsuranceType() {
    let url = "http://localhost:8080/api/v1/insurance/insuranceType"
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });
    return this.http.get<any[]>(url, { headers: httpHeaders });
  }

  userProfile() {
    let url = "http://localhost:8080/api/v1/customer/" + localStorage.getItem('userId')
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });
    console.log(url);
    return this.http.get<any[]>(url, { headers: httpHeaders })
  }

  addInsuranceType(data: any) {
    let url = "http://localhost:8080/api/v1/insurance/addInsuranceType"
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });
    return this.http.post(url, data, { headers: httpHeaders });
  }
}
