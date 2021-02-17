import { LOCALE_ID, Component, Inject } from '@angular/core';
import { UserModel } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto0221';
  user?: UserModel;

  constructor(@Inject(LOCALE_ID) private locale: string,
    private auth: AuthenticationService) {
    /*if (sessionStorage.getItem('USER') != null) {
      this.user = JSON.parse(sessionStorage.getItem('USER') || '{}') as UserModel;
    }*/

  }

  ngOnInit(): void {
    console.log('subscribe');
    this.auth.$user.subscribe(x => this.user = x);
  }

  change(): void {
    this.locale = 'es';
  }

  onLogout(): void {
    this.auth.logout();
  }
}
