import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { CustomManifest } from '../../utils/custom-manifest';

@Component({
  selector: 'dynamic-module-federation-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly manifest = getManifest<CustomManifest>();
}
