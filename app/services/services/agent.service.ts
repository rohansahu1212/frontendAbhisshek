import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }
  
  getAgents() {
    let url = "http://localhost:8080/api/v1/agent"
    let token = "Bearer " + localStorage.getItem("token")
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getNumberOfAgents() {
    let length: number;
    return this.getAgents().subscribe(data =>
      console.log(data.length))
  }

  userProfile(){
    let url = "http://localhost:8080/api/v1/agent/"+ localStorage.getItem('userId')
    const httpHeaders = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem("token") 
    });
    console.log(url);
    return this.http.get(url,{headers:httpHeaders});
  }

  addAgentData(data:any){
    let url = "http://localhost:8080/api/v1/agent/addAgent";
    const httpHeaders = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem("token") 
    });
    return this.http.post(url,data,{headers:httpHeaders});
  }
  
  getAgentById(id:number){
    let url = "http://localhost:8080/api/v1/agent/"+id;
    let token = "Bearer " + localStorage.getItem("token")
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  addAgent(data:any){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/agent/addAgent";
    return this.http.post<any[]>(url,data, {
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
