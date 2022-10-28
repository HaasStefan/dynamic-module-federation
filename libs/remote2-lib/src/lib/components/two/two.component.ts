import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchoService } from '@dynamic-module-federation/shared';

@Component({
  selector: 'dynamic-module-federation-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  constructor(
    private echo: EchoService
  ) {}

  ngOnInit(): void {
    this.echo.print('2');
  }
}
