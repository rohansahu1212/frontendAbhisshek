import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/services/admin.service';

@Component({
  selector: 'viewFeedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
  title: string = "View Feedback"
  feedbacks: any[] = []

  constructor(private service: AdminService) {
    this.viewFeedback()
  }

  ngOnInit(): void {
  }

  viewFeedback() {
    this.service.viewFeedback().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.feedbacks.push(el)
      })
    })
  }
}
