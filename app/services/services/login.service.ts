import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/api/v1/login/tokenlogin";
  }

  loginUser(data: any) {
    return this.http.post(this.url, data);
  }
}
