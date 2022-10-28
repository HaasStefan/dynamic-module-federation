import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchoService } from '@dynamic-module-federation/shared';

@Component({
  selector: 'dynamic-module-federation-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  constructor(
    private echo: EchoService
  ) {}

  ngOnInit(): void {
    this.echo.print('1');
  }
}
