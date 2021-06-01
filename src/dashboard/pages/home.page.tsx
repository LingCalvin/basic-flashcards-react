import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import LoadableComponent from '../../common/components/loadable-component';
import Page from '../../common/components/page';
import useUniqueId from '../../common/hooks/use-unique-id';
import Deck from '../../deck/interfaces/deck';
import { decksService } from '../../deck/services/decks.service';
import DeckInfoTile from '../components/deck-info-tile';
import useStyles from './home.page.styles';

export default function HomePage() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  const [exampleDecks, setExampleDecks] = useState<Deck[]>([]);

  useEffect(() => {
    decksService
      .findAll({ orderTitleBy: 'asc', take: 3 })
      .then(({ decks }) => setExampleDecks(decks))
      .finally(() => setLoading(false));
  }, []);

  const exampleDecksSectionId = useUniqueId();

  return (
    <Page
      skipLinks={[
        { fragment: 'content', text: 'Skip to content' },
        { fragment: exampleDecksSectionId, text: 'Skip to example decks' },
      ]}
    >
      <main id="content">
        <div className={classes.topSection}>
          <Typography variant="h1">
            Create, search for, and review decks.
          </Typography>
        </div>
        <section
          id={exampleDecksSectionId}
          className={classes.exampleDecksSection}
        >
          <Typography variant="h2">Example decks</Typography>
          <LoadableComponent loading={loading}>
            <div className={classes.exampleDecksContainer}>
              {exampleDecks.map((deck) => (
                <DeckInfoTile
                  key={deck.id}
                  deckId={deck.id ?? ''}
                  title={deck.title}
                  numberOfCards={deck.cards.length}
                  author={deck.authorId ?? ''}
                />
              ))}
            </div>
          </LoadableComponent>
        </section>
      </main>
    </Page>
  );
}
