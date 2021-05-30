import {
  Button,
  Fab,
  MenuItem,
  Snackbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { Pagination } from '@material-ui/lab';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import routes from '../../router/constants/routes';
import useDebouncedValue from '../../common/hooks/use-debounced-value';
import useIsMobile from '../../common/hooks/use-is-mobile';
import Deck from '../../deck/interfaces/deck';
import { FindAllDecksParams } from '../../deck/interfaces/find-all-decks-params';
import { decksService } from '../../deck/services/decks.service';
import DeckInfoTile from '../components/deck-info-tile';
import useStyles from './dashboard.page.styles';
import { deckView } from '../../router/utils/route.utils';
import CredentialsContext from '../../auth/contexts/credentials.context';
import DeleteDeckDialog from '../components/delete-deck-dialog';
import { downloadBlob } from '../../common/utils/download.utils';
import { autoHideDuration } from '../../common/constants/snackbar';
import LoadableComponent from '../../common/components/loadable-component';
import TextField from '../../common/components/text-field';

interface DashboardPageProps {
  pageSize?: number;
}

export default function DashboardPage({ pageSize = 10 }: DashboardPageProps) {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const { id: userId } = useContext(CredentialsContext) ?? {};

  if (!userId) {
    throw new Error('Unexpected nullish value: userId');
  }

  const [initialLoad, setInitialLoad] = useState(true);

  const [loadedDecks, setLoadedDecks] = useState<Deck[]>([]);
  const [totalDecks, setTotalDecks] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const searchValue = useDebouncedValue(
    search,
    theme.transitions.duration.short
  );

  const exportDeck = (deck: Deck) => {
    const deckJSON = JSON.stringify(deck, undefined, 2);
    downloadBlob(new Blob([deckJSON], { type: 'application/json' }));
  };

  const findDecks = (params: FindAllDecksParams) => {
    setLoading(true);
    decksService
      .findAll({
        ...params,
      })
      .then((res) => {
        setLoadedDecks(res.decks);
        setTotalDecks(res.count);
      })
      .finally(() => {
        setLoading(false);
        setInitialLoad(false);
      });
  };

  useEffect(() => {
    findDecks({
      authorId: [userId],
      orderTitleBy: 'asc',
      take: pageSize,
      skip: (page - 1) * pageSize,
      caseInsensitive: true,
      titleContains: searchValue ? searchValue : undefined,
    });
  }, [page, pageSize, searchValue, userId]);

  const [showDialog, setShowDialog] = useState(false);
  const [deckToDelete, setDeckToDelete] = useState<Deck | null>(null);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  return (
    <div>
      <DeleteDeckDialog
        deckTitle={deckToDelete?.title ?? ''}
        open={showDialog}
        onBackDropClick={() => setShowDialog(false)}
        onExited={() => setDeckToDelete(null)}
        onCancel={() => setShowDialog(false)}
        onDelete={() => {
          decksService
            .remove(deckToDelete?.id ?? '')
            .then(() =>
              findDecks({
                authorId: [userId],
                orderTitleBy: 'asc',
                take: pageSize,
                skip: (page - 1) * pageSize,
                caseInsensitive: true,
                titleContains: searchValue ? searchValue : undefined,
              })
            )
            .finally(() => setShowDialog(false));
        }}
      />
      <div className={classes.content}>
        <Typography variant="h2">Your decks</Typography>

        <div className={classes.sortAndSearchContainer}>
          <div>
            <TextField label="Sort by" variant="outlined" select value="title">
              <MenuItem value="title">Title</MenuItem>
            </TextField>
          </div>
          <TextField
            label="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className={classes.buttonBox}>
            <label>
              <Button color="primary" component="span">
                Import
              </Button>
              <input
                type="file"
                accept="application/json"
                hidden
                onChange={(changeEvent) => {
                  setLoading(true);
                  const reader = new FileReader();
                  const file = changeEvent.target.files?.[0];
                  if (!file) {
                    return;
                  }
                  reader.onload = (e) => {
                    const { result } = e.target ?? {};
                    if (!result) {
                      return;
                    }
                    const deck: Deck = JSON.parse(result as string);
                    decksService
                      .create(deck)
                      .then(() =>
                        findDecks({
                          authorId: [userId],
                          orderTitleBy: 'asc',
                          take: pageSize,
                          skip: (page - 1) * pageSize,
                          caseInsensitive: true,
                          titleContains: searchValue ? searchValue : undefined,
                        })
                      )
                      .then(() => {
                        setSnackbarMessage('Deck successfully imported');
                        setShowSnackbar(true);
                      })
                      .catch(() => {
                        setSnackbarMessage('Failed to import deck.');
                        setShowSnackbar(true);
                      })
                      .finally(() => {
                        changeEvent.target.value = '';
                        setLoading(false);
                      });
                  };
                  reader.readAsText(file);
                }}
              />
            </label>
            {!isMobile && (
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to={routes.deckAdd}
              >
                Create
              </Button>
            )}
          </div>
        </div>
        <LoadableComponent loading={initialLoad}>
          <div className={classes.paginationContainer}>
            <div className={classes.deckList}>
              {loadedDecks.map((deck) => (
                <DeckInfoTile
                  key={deck.id}
                  deckId={deck.id ?? ''}
                  title={deck.title}
                  numberOfCards={deck.cards.length}
                  onClick={() => history.push(deckView(deck.id ?? ''))}
                  onDelete={() => {
                    setDeckToDelete(deck);
                    setShowDialog(true);
                  }}
                  onExport={() => exportDeck(deck)}
                  onEdit={() => history.push(`${routes.decks}/${deck.id}/edit`)}
                />
              ))}
            </div>
            {/* Only show pagination controls if there is more than one page */}
            {totalDecks / pageSize > 1 && (
              <div className={classes.paginationControls}>
                <Pagination
                  count={Math.ceil(totalDecks / pageSize)}
                  page={page}
                  onChange={(_e, value) => setPage(value)}
                  disabled={loading}
                />
              </div>
            )}
          </div>
        </LoadableComponent>

        {isMobile && (
          <Fab
            aria-label="create deck"
            className={classes.fab}
            color="primary"
            component={Link}
            to={routes.deckAdd}
          >
            <AddIcon />
          </Fab>
        )}
        <Snackbar
          className={classes.snackbar}
          open={showSnackbar}
          message={snackbarMessage}
          autoHideDuration={autoHideDuration}
          onClose={() => setShowSnackbar(false)}
        />
      </div>
    </div>
  );
}
