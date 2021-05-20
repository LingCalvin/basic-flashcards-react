import Card from '../../card/interfaces/card';
import { DeckVisibility } from '../types/deck-visibility';

export default interface Deck {
  id?: string;
  authorId?: string;
  title: string;
  description: string;
  visibility: DeckVisibility;
  cards: Card[];
  tags: string[];
}
