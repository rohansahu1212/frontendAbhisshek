import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class InsuranceService {

    constructor(private http: HttpClient) { }

    getInsuranceType() {
        let url = "http://localhost:8080/api/v1/insurance/insuranceType"
        let token = "Bearer " + localStorage.getItem("token")
        const httpHeaders = new HttpHeaders({
            "Authorization": token
        });
        return this.http.get<any[]>(url, { headers: httpHeaders });
    }

    getInsurnacePlanList() {
        let url = "http://localhost:8080/api/v1/insurance/insurancePlan"
        const httpHeaders = new HttpHeaders({
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        return this.http.get<any[]>(url, { headers: httpHeaders });

    }

    getInsurancePlanByTypeId(id: number) {
        let url = "http://localhost:8080/api/v1/insurance/insurancePlan/type/" + id
        const httpHeaders = new HttpHeaders({
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        return this.http.get<any[]>(url, { headers: httpHeaders });
    }

    getInsurancePlanById(id: number) {
        let url = "http://localhost:8080/api/v1/insurance/insurancePlan/" + id
        const httpHeaders = new HttpHeaders({
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        return this.http.get<any>(url, { headers: httpHeaders });
    }

    getAddPlan(data:any){
        let url = "http://localhost:8080/api/v1/policy/addPolicy"
        const httpHeaders = new HttpHeaders({
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        return this.http.post(url,data, { headers: httpHeaders });

    }
}