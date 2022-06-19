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
  activateEmployee(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id+"/activate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deactivateEmployee(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id+"/deactivate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deleteEmployeeById(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id+"/delete";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
  activateAgent(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/agent/"+id+"/activate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deactivateAgent(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/agent/"+id+"/deactivate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deleteAgentById(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/agent/"+id+"/delete";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
}
