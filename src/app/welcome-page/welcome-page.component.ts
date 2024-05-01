import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/').subscribe({
      next: (data: any) => {
        console.log('Data received:', data)
      },
      error: error => {
        console.log('There was an error!', error);
      }
    });
  }

  testFunction() {
    console.log('Test function called!');
  }
}
