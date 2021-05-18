import { AxiosInstance } from 'axios';
import apiClient from '../../common/constants/api-client';
import Deck from '../interfaces/deck';
import { FindAllDecksParams } from '../interfaces/find-all-decks-params';
import { FindAllDecksResponse } from '../interfaces/find-all-decks-response';
import FindOneDeckResponse from '../interfaces/find-one-deck-response';

export class DecksService {
  constructor(private http: AxiosInstance) {}

  async findOne(id: string): Promise<Deck | null> {
    const { data } = await this.http.get<FindOneDeckResponse>(`/decks/${id}`);
    return findOneDeckResponseToDeck(data);
  }

  async findAll(
    params: FindAllDecksParams
  ): Promise<{ decks: Deck[]; count: number }> {
    const { data } = await this.http.get<FindAllDecksResponse>(`/decks`, {
      params,
    });

    return {
      decks: data.decks.map(findOneDeckResponseToDeck),
      count: data.count,
    };
  }
}

export const decksService = new DecksService(apiClient);

function findOneDeckResponseToDeck(data: FindOneDeckResponse): Deck {
  const { id, authorId, title, description } = data;
  return {
    id,
    authorId,
    title,
    description,
    cards: data.cards.map((card) => ({
      sides: [{ text: card.frontText }, { text: card.backText }],
    })),
    tags: [],
  };
}
