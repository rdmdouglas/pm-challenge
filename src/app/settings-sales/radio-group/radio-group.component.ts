import { Component, Input, OnInit } from '@angular/core';
import { IRadioGroupItem } from './radio-group.model';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  @Input() items!: IRadioGroupItem[];
  checkedItem!: IRadioGroupItem | null;

  ngOnInit(): void {
    this.checkedItem = this.items.find(x => x.checked) || null;
  }

  onChange(item: IRadioGroupItem) {
    const curr = this.items.find(x => x.checked);
    if (curr) curr.checked = false;
    item.checked = true;
  }
}
