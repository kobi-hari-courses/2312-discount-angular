import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //data
  keyword: string = '';
  isBusy: boolean = false;
  results: string[] = [];

// actions
  setKeyword(value: string) {
    this.keyword = value;
    console.log('setting keyword to ', value);
  }

  search() {
    console.log('searching for ', this.keyword);
    this.isBusy = true;
    this.results = [];

    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword.toLowerCase(), 
        this.keyword.toUpperCase(), 
        `*${this.keyword}*`
      ]
    }, 3000);
  }
}
