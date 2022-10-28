import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchoService } from '@dynamic-module-federation/shared';

@Component({
  selector: 'dynamic-module-federation-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss'],
})
export class FourComponent implements OnInit {
  constructor(
    private echo: EchoService
  ) {}

  ngOnInit(): void {
    this.echo.print('4');
  }
}
