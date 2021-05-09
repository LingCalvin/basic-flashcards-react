import CardSide from './card-side';

export default interface Card {
  id?: string;
  sides: [CardSide, CardSide];
}
