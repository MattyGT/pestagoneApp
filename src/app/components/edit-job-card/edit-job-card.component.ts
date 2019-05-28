import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-job-card',
  templateUrl: './edit-job-card.component.html',
  styleUrls: ['./edit-job-card.component.css']
})
export class EditJobCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log("Submit form",formData);
  }

}
