import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
})
export class LinkButtonComponent {
  @Input({ required: true }) link!: string;
  @Input({ required: true }) name!: string;

  onClick() {
    if (this.link) window.open(this.link, '_blank');
  }
}
