import { LOCALE_ID, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto0221';

  constructor(@Inject(LOCALE_ID) private locale: string) {

  }

  change(): void {
    this.locale = 'es';
  }
}
