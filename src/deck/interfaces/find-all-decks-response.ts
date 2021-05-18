import FindOneDeckResponse from './find-one-deck-response';

export interface FindAllDecksResponse {
  decks: FindOneDeckResponse[];
  count: number;
}
