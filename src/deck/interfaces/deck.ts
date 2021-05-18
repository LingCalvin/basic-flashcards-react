import Card from '../../card/interfaces/card';

export default interface Deck {
  id?: string;
  authorId?: string;
  title: string;
  description: string;
  cards: Card[];
  tags: string[];
}
