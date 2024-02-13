import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  template: '<p class="mensaje">{{ mensaje }}</p>'
})
export class GreetingsComponent {
  mensaje: string = 'Valor por defecto';
}