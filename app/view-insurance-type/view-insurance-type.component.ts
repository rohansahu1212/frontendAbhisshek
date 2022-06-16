import { Component, OnInit } from "@angular/core";
import { AdminService } from "../services/services/admin.service";

@Component({
  selector: "insuranceType",
  templateUrl: "./view-insurance-type.component.html",
  styleUrls: ["./view-insurance-type.component.css"],
})
export class ViewInsuranceTypeComponent implements OnInit {
  agents: any[]=[];
  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.getAgents();
  }
  getAgents() {
    this.service.getInsuranceType().subscribe((data) => {
      console.log(data);
      
      
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.agents.push(el)
      })


    });
  }
}
