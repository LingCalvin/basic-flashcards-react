import { Pagination } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import LoadableComponent from '../../common/components/loadable-component';
import DeckInfoTile from '../../dashboard/components/deck-info-tile';
import routes from '../../router/constants/routes';
import Deck from '../interfaces/deck';
import { decksService } from '../services/decks.service';
import useStyles from './deck-search.page.styles';
import * as MathUtils from '../../common/utils/math.utils';
import { Search } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import Page from '../../common/components/page';

export default function DeckSearchPage() {
  const classes = useStyles();

  const [deckSlice, setDeckSlice] = useState<Deck[]>([]);
  const [totalDecks, setTotalDecks] = useState(0);

  const { search } = useLocation();
  const qs = new URLSearchParams(search);

  const term = qs.get('term') ?? '';

  const pageSizeString = qs.get('pageSize');
  const pageSize = MathUtils.clamp(
    1,
    50,
    pageSizeString ? +pageSizeString : 10
  );

  const numberOfPages = Math.max(1, Math.ceil(totalDecks / pageSize));

  const pageString = qs.get('page');
  const page = MathUtils.clamp(1, numberOfPages, pageString ? +pageString : 1);

  const from = qs.get('from');

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  // Remove the from search param
  useEffect(() => {
    if (from) {
      qs.delete('from');
      history.replace({ search: qs.toString() });
    }
  });

  useEffect(() => {
    // Do not send a request if the from param is being removed
    if (from) {
      return;
    }
    if (!term) {
      setLoading(false);
      setDeckSlice([]);
      return;
    }
    setLoading(true);
    decksService
      .findAll({
        titleContains: term,
        caseInsensitive: true,
        take: pageSize,
        skip: (page - 1) * pageSize,
      })
      .then(({ decks, count }) => {
        setDeckSlice(decks);
        setTotalDecks(count);
      })
      .finally(() => setLoading(false));
  }, [from, page, pageSize, term]);

  const results = (
    <main className={classes.paginationContainer}>
      <Typography variant="h1">Results</Typography>
      <div className={classes.results}>
        {deckSlice.map((deck) => (
          <DeckInfoTile
            key={deck.id}
            deckId={deck.id ?? ''}
            title={deck.title}
            numberOfCards={deck.cards.length}
            author={deck.authorId ?? ''}
          />
        ))}
      </div>
      {totalDecks / pageSize > 1 && (
        <div className={classes.paginationControls}>
          <Pagination
            count={numberOfPages}
            page={page}
            onChange={(_e, value) =>
              history.push({
                pathname: routes.deckSearch,
                search: `?term=${encodeURIComponent(
                  term
                )}&page=${encodeURIComponent(
                  value
                )}&pageSize=${encodeURIComponent(pageSize)}`,
              })
            }
            disabled={loading}
          />
        </div>
      )}
    </main>
  );

  const emptyResults = (
    <div className={classes.emptyResults}>
      <Search className={classes.emptyResultsIcon} />
      <Typography variant="h4" component="div">
        No results found
      </Typography>
      <Typography>Enter a new search and results will show up here.</Typography>
    </div>
  );

  return (
    <Page skipLinks={[{ fragment: 'content', text: 'Skip to content' }]}>
      <main className={classes.content}>
        <LoadableComponent loading={loading}>
          {totalDecks > 0 ? results : emptyResults}
        </LoadableComponent>
      </main>
    </Page>
  );
}
