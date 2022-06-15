import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddingInsuranceSchemeService {
    constructor(private http: HttpClient, private router: Router) { 

    }

    addCustomer(data:any)
    {
      console.log(data);
    }

}