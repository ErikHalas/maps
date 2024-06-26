import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent {
  constructor() { }

  @Input() text = '';
  @Input() isDisabled = false;
}
