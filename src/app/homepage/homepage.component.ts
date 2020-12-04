import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @Output() login = new EventEmitter<null>();
  public readonly inputForm: FormGroup;
  public loggedIn: boolean = false;

  constructor (private readonly fb: FormBuilder, private router: Router) {
    this.inputForm = this.fb.group({
      first: [null, [Validators.required]],
      last: [null, [Validators.required]],
      email: [null, [Validators.required]],
      year: [null, [Validators.required, Validators.min(1900), Validators.max(2000)]]
    });
  }

  ngOnInit() {
    
  }

  formLoginClick(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        first: this.inputForm.value.first,
        last: this.inputForm.value.last,
        email: this.inputForm.value.email,
        year: this.inputForm.value.year
      }
    };
    console.log('here');
    this.router.navigate(['success'], navigationExtras);
  }

}
