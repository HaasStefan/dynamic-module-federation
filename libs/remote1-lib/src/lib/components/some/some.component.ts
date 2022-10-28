import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchoService } from '@dynamic-module-federation/shared';

@Component({
  selector: 'dynamic-module-federation-some',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
})
export class SomeComponent implements OnInit {
  constructor(
    private echo: EchoService
  ) {
  }

  ngOnInit(): void {
    this.echo.print('some');
  }
}
