import Card from '../../card/interfaces/card';
import * as randomUtils from '../../common/utils/random.utils';

/**
 * Returns a shuffled deck of cards.
 *
 * @remarks
 * This is an implementation of the modern version of the Fisher-Yates shuffle
 * algorithm designed by Richard Durstenfeld.
 *
 * @param cards - The cards to shuffle
 * @returns An array of cards in a random order
 */
export function shuffle(cards: Card[]): Card[] {
  const shuffledCards = new Array<Card>(cards.length);
  for (let i = 0; i < cards.length - 2; i++) {
    const j = randomUtils.randomInt(i, cards.length);
    shuffledCards[i] = cards[j];
    shuffledCards[j] = cards[i];
  }
  return shuffledCards;
}
