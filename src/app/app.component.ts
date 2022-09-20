import { Component, OnInit } from '@angular/core';
import { ApiErrorService } from './_subjects/api-error.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div id="api-error" [class.error]="display">
      <span (click)="clearMessage()">x</span>
      {{ message }}
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  title = 'second';

  message = 'Test'
  display = false

  constructor(private apiErrorService: ApiErrorService){}

  ngOnInit(){
    this.apiErrorService.apiError.subscribe(
      data => {
        this.message = data
        this.display = true
      })
  }

  clearMessage(){
    this.message = ''
    this.display = false
  }
}
