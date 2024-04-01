import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularApp';
  public msg = 'Hello';
  onchange(val: any) {
    console.log(val);
    this.msg = val;
  }

  public fruits = [
    { name: 'Apple', price: 12 },
    { name: 'Orange', price: 4 },
    { name: 'Kiwi', price: 2 },
  ];
}
