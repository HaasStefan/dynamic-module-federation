import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'dynamic-module-federation-wrapper',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
}
