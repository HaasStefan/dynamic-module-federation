import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchoService } from '@dynamic-module-federation/shared';

@Component({
  selector: 'dynamic-module-federation-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  constructor(
    private echo: EchoService
  ) {}

  ngOnInit(): void {
    this.echo.print('3');
  }
}
