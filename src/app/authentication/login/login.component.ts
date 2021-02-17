import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('password')
  passwd?: ElementRef;


  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {

  }

  onLogin(email: string): void {
    console.log(email);
    console.log(this.passwd?.nativeElement.value);
    this.auth.login(email, this.passwd?.nativeElement.value);
  }

}
