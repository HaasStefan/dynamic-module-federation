import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EchoService {
  print(message: string): void {
    console.log(message);
  }
}
