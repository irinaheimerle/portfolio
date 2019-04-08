import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rin Heimerle';

  testString: string;

  constructor() {
    this.testString = "test!";
  }

}
