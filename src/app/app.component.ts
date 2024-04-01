import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularApp';
  public msg = '';
  public data: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchDetails();
  }

  fetchDetails() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((resp: any) => {
        console.log(resp);
        this.data = resp;
      });
  }
}
