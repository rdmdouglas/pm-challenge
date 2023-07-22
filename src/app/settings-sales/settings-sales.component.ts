import { Component, OnInit } from '@angular/core';
import { CardsStyle, ICardsItem } from './cards/cards.model';
import { IRadioGroupItem } from './radio-group/radio-group.model';

@Component({
  selector: 'app-settings-sales',
  templateUrl: './settings-sales.component.html',
  styleUrls: ['./settings-sales.component.scss']
})
export class SettingsSalesComponent implements OnInit {
  radioItems!: IRadioGroupItem[];

  private cardsItems!: ICardsItem[];

  ngOnInit(): void {
    this.radioItems = [
      { label: 'Basic', value: 'basic', checked: true },
      { label: 'Advanced', value: 'advanced' },
      { label: 'Expert', value: 'expert' },
      { label: 'Custom', value: 'custom' }
    ]

    this.cardsItems = [
      { title: 'Lead', style: CardsStyle.Purple },
      { title: 'RFP in progress', style: CardsStyle.Yellow },
      { title: 'Submitted', style: CardsStyle.Blue },
      { title: 'Won', style: CardsStyle.Green },
      { title: 'Lost', style: CardsStyle.Red },
      { title: 'Closed', style: CardsStyle.Default },
    ];
  }

  getCardsItems(): ICardsItem[] {
    const checked = this.radioItems.find(x => x.checked);
    switch (checked?.value) {
      case 'basic':
      default:
        return [this.cardsItems[2], this.cardsItems[5]];
      case 'advanced':
        return [this.cardsItems[0], this.cardsItems[2], this.cardsItems[5]];
      case 'expert':
        return this.cardsItems;
      case 'custom':
        return [
          { title: 'Custom', style: CardsStyle.Default },
          { title: 'Custom', style: CardsStyle.Default },
          { title: 'Custom', style: CardsStyle.Default }
        ];
    }
  }
}
