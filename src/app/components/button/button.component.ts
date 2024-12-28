import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class=" text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-slate"
    (click)="btnClicked.emit()">
    {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {

  label = input('');

  btnClicked = output();
}
