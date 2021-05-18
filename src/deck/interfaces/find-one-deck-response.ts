export default interface FindOneDeckResponse {
  id: string;
  authorId: string;
  title: string;
  description: string;
  visibility: 'PRIVATE' | 'PUBLIC';
  cards: Card[];
}

interface Card {
  id: string;
  frontText: string;
  backText: string;
  position: number;
  deckId: string;
}
