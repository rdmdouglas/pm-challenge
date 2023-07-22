import { Component, Input } from '@angular/core';
import { ICardsItem } from './cards.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() items!: ICardsItem[];
}
