import Card from '../../card/interfaces/card';

export default interface Deck {
  id?: string;
  title: string;
  cards: Card[];
  tags: string[];
}
