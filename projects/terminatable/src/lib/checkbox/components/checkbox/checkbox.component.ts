import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICheckboxModel } from '../../models/ICheckbox';

@Component({
  selector: 'lib-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent implements OnInit {

  selectedAll: boolean = false;
  _value: any = undefined;
  @Input() set value(value: any | undefined) {
    this._value = value;
  }

  @Output() onChangeAllEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onChangeEmitter: EventEmitter<ICheckboxModel> = new EventEmitter<ICheckboxModel>();

  constructor() {}

  ngOnInit(): void {
  }

  onChangeAll = () => {
    this.onChangeAllEmitter.emit(this.selectedAll);
  };

  onChange(event: Event, value?: any) {
    const checked: boolean = (event.target as HTMLInputElement).checked;
    const res: ICheckboxModel = { event, checked, value };
    this.onChangeEmitter.emit(res);
  }
}
