import { Component, OnInit } from "@angular/core";
import { AdminService } from "../services/services/admin.service";

@Component({
  selector: "addInsuranceType",
  templateUrl: "./add-insurance-type.component.html",
  styleUrls: ["./add-insurance-type.component.css"],
})
export class AddInsuranceTypeComponent implements OnInit {
  title: string = "Add Insurance Type";
  insuranceType: string = "";
  status: string = "";
  constructor(private service: AdminService) {}

  ngOnInit(): void {}
  getData(data: any) {
    console.log(data);
    this.service.addInsuranceType(data).subscribe((resp) => {
      console.log(resp);
      alert(data.id +"plan added");
    });
  }
}
