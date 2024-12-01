import { Component } from '@angular/core';
import { LinkButtonComponent } from './components/link-button/link-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LinkButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'social-links-profile';
}
