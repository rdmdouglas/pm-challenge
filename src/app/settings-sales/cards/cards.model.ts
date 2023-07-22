export enum CardsStyle {
  Default = 'default',
  Purple = 'purple',
  Yellow = 'yellow',
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
}

export interface ICardsItem {
  title: string;
  style: CardsStyle;
}
