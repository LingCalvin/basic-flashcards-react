import { AxiosInstance } from 'axios';
import { authService } from '../../auth/services/auth.service';
import apiClient from '../../common/constants/api-client';
import Deck from '../interfaces/deck';
import { FindAllDecksParams } from '../interfaces/find-all-decks-params';
import { FindAllDecksResponse } from '../interfaces/find-all-decks-response';
import FindOneDeckResponse from '../interfaces/find-one-deck-response';

export class DecksService {
  constructor(private http: AxiosInstance) {}

  async create({ title, description, visibility, cards }: Deck) {
    const { data } = await this.http.post('/decks', {
      authorId: authService.getCurrentUser(),
      title,
      description,
      visibility,
      cards: cards.map(
        ({ sides: [{ text: frontText }, { text: backText }] }) => ({
          frontText,
          backText,
        })
      ),
    });
    return data;
  }

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

  async remove(id: string) {
    return this.http.delete(`/decks/${id}`);
  }
}

export const decksService = new DecksService(apiClient);

function findOneDeckResponseToDeck(data: FindOneDeckResponse): Deck {
  const { id, authorId, title, description, visibility } = data;
  return {
    id,
    authorId,
    title,
    description,
    visibility,
    cards: data.cards.map((card) => ({
      sides: [{ text: card.frontText }, { text: card.backText }],
    })),
    tags: [],
  };
}
