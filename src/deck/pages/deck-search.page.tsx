import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import LoadableComponent from '../../common/components/loadable-component';
import AppBar from '../../dashboard/components/app-bar';
import DeckInfoTile from '../../dashboard/components/deck-info-tile';
import routes from '../../router/constants/routes';
import { deckView } from '../../router/utils/route.utils';
import Deck from '../interfaces/deck';
import { decksService } from '../services/decks.service';
import useStyles from './deck-search.page.styles';
import * as MathUtils from '../../common/utils/math.utils';

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

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    if (!term) {
      setLoading(false);
      setDeckSlice([]);
      return;
    }
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
  }, [page, pageSize, term]);

  return (
    <div>
      <AppBar forceSearchOpen />
      <div className={classes.content}>
        <LoadableComponent loading={loading}>
          <div className={classes.paginationContainer}>
            <div className={classes.results}>
              {deckSlice.map((deck) => (
                <DeckInfoTile
                  key={deck.id}
                  deckId={deck.id ?? ''}
                  title={deck.title}
                  numberOfCards={deck.cards.length}
                  author={deck.authorId ?? ''}
                  onClick={() => history.push(deckView(deck.id ?? ''))}
                />
              ))}
            </div>
            {/* FIXME: Fix spacing */}
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
          </div>
        </LoadableComponent>
      </div>
    </div>
  );
}
