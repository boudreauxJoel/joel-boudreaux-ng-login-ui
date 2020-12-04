import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-logged-in',
  templateUrl: './user-logged-in.component.html',
  styleUrls: ['./user-logged-in.component.css']
})
export class UserLoggedInComponent implements OnInit {
  inputFormData;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.inputFormData = params;
    });
  }

  ngOnInit(): void {
  }

}
