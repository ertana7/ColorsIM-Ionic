import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  private backgroudColor;

  constructor(private http: HttpClient, private router: Router) { 
    this.http.get('http://colorsim.test/get-user-color/jaapvandeboom@fakemail.com/').subscribe(data => {
      // document.getElementById('x33333').style.backgroundColor = data[0]
    });
  }

  ngOnInit() {
  }

}
