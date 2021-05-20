import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { Pagination } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import paths from '../../common/constants/paths';
import useDebouncedValue from '../../common/hooks/use-debounced-value';
import useIsMobile from '../../common/hooks/use-is-mobile';
import useUniqueId from '../../common/hooks/use-unique-id';
import Deck from '../../deck/interfaces/deck';
import { FindAllDecksParams } from '../../deck/interfaces/find-all-decks-params';
import { decksService } from '../../deck/services/decks.service';
import AppBar from '../components/app-bar';
import DeckInfoTile from '../components/deck-info-tile';
import useStyles from './dashboard.page.styles';

interface DashboardPageProps {
  userId: string;
  pageSize?: number;
}

export default function DashboardPage({
  userId,
  pageSize = 10,
}: DashboardPageProps) {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const [decks, setDecks] = useState<Deck[]>([]);
  const [totalDecks, setTotalDecks] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const id = useUniqueId();
  const [search, setSearch] = useState('');
  const searchValue = useDebouncedValue(
    search,
    theme.transitions.duration.short
  );

  const findDecks = (params: FindAllDecksParams) => {
    setLoading(true);
    decksService
      .findAll({
        ...params,
      })
      .then((res) => {
        setDecks(res.decks);
        setTotalDecks(res.count);
      })
      .finally(() => setLoading(false));
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

  return (
    <div>
      <Dialog
        open={showDialog}
        onBackdropClick={() => setShowDialog(false)}
        onExited={() => setDeckToDelete(null)}
      >
        <DialogTitle>Delete deck?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete deck "{deckToDelete?.title}"? This
            action cannot be undone.
          </DialogContentText>
          <DialogActions>
            <Button
              color="primary"
              autoFocus
              onClick={() => {
                setShowDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => {
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
            >
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <AppBar />
      <div className={classes.content}>
        <Typography variant="h2">Your decks</Typography>

        <div className={classes.sortAndSearchContainer}>
          <div>
            <InputLabel id={id}>Sort by</InputLabel>
            <Select labelId={id} value="title">
              <MenuItem value="title">Title</MenuItem>
            </Select>
          </div>
          <TextField
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {!isMobile && (
            <Button
              color="primary"
              variant="contained"
              component={Link}
              to={paths.deckAdd}
              className={classes.addButton}
            >
              Add Deck
            </Button>
          )}
        </div>
        <div className={classes.paginationContainer}>
          <div className={classes.deckList}>
            {decks.map((deck) => (
              <DeckInfoTile
                key={deck.id}
                deckId={deck.id ?? ''}
                title={deck.title}
                numberOfCards={deck.cards.length}
                onClick={() => history.push(`${paths.decks}/${deck.id}`)}
                onDelete={() => {
                  setDeckToDelete(deck);
                  setShowDialog(true);
                }}
                onEdit={() => history.push(`${paths.decks}/${deck.id}/edit`)}
              />
            ))}
          </div>
          {decks.length > 0 && (
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
        {isMobile && (
          <Fab
            className={classes.fab}
            color="primary"
            component={Link}
            to={paths.deckAdd}
          >
            <AddIcon />
          </Fab>
        )}
      </div>
    </div>
  );
}
