import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('password')
  passwd?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(email: string): void {
    console.log(email);
    console.log(this.passwd?.nativeElement.value);
  }

}
