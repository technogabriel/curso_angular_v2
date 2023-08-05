import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'changecolorbutton';
  headerColor = 'black' //initial color
  changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.headerColor = randomColor;
  }
}


