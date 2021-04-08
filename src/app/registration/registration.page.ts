import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(private http: HttpClient, private router: Router) { 
    this.http.put('http://colorsim.test/add-user/Jaap/jaapvandeboom@fakemail.com/0000/eb4034', 1).subscribe();
    this.router.navigate(['/start']);
  }

  ngOnInit() {
  }

}
