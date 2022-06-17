import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees() {
    let url = "http://localhost:8080/api/v1/employee"
    let token = "Bearer " + localStorage.getItem("token")
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
  
  userProfile() {
    let url = "http://localhost:8080/api/v1/employee/" + localStorage.getItem('userId')
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });
    console.log(url);
    return this.http.get<any[]>(url, { headers: httpHeaders })
  }

  addEmployeeData(data:any){
    let url = "http://localhost:8080/api/v1/employee/addEmployee";
    const httpHeaders = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem("token") 
    });
    return this.http.post(url,data,{headers:httpHeaders});
  }
}
