import {
  AppBar as MuiAppBar,
  Avatar,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Close, Search } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CredentialsContext from '../../auth/contexts/credentials.context';
import { authService } from '../../auth/services/auth.service';
import useIsMobile from '../../common/hooks/use-is-mobile';
import useTextFieldValue from '../../common/hooks/use-text-field-value';
import routes from '../../router/constants/routes';
import useStyles from './app-bar.styles';

interface AppBarProps {
  forceSearchOpen?: boolean;
}

export default function AppBar({ forceSearchOpen }: AppBarProps) {
  const classes = useStyles();

  const isMobile = useIsMobile();

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const credentials = useContext(CredentialsContext);

  const closeMenu = () => setMenuAnchor(null);
  const history = useHistory();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, onSearchTermChange] = useTextFieldValue('');

  const menu = (
    <Menu
      open={menuAnchor !== null}
      anchorEl={menuAnchor}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      getContentAnchorEl={undefined}
      onClose={closeMenu}
    >
      <Typography className={classes.menuUsername}>
        {credentials?.username.toLocaleUpperCase()}
      </Typography>
      <Divider />
      <MenuItem onClick={closeMenu}>Manage account</MenuItem>
      <MenuItem
        onClick={() => {
          authService.logOut().then(() => history.push(routes.home));
        }}
      >
        Sign out
      </MenuItem>
    </Menu>
  );

  const avatar = (
    <Avatar>{credentials?.username.substring(0, 1).toLocaleUpperCase()}</Avatar>
  );

  const loginProfile = authService.isAuthenticated() ? (
    <IconButton
      className={classes.avatarButton}
      color="inherit"
      onClick={(e) => setMenuAnchor(e.currentTarget)}
    >
      {avatar}
    </IconButton>
  ) : (
    <Button component={Link} to={routes.login} color="inherit">
      Log in
    </Button>
  );

  const searchBar = (
    <Paper className={classes.searchBar}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push({
            pathname: routes.deckSearch,
            search: `?term=${encodeURIComponent(searchTerm)}`,
          });
        }}
      >
        <InputBase
          value={searchTerm}
          fullWidth={isMobile}
          placeholder="Search"
          className={classes.searchBarInput}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          endAdornment={
            isMobile ? (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowSearchBar(false)}>
                  <Close />
                </IconButton>
              </InputAdornment>
            ) : undefined
          }
          onChange={onSearchTermChange}
        />
      </form>
    </Paper>
  );

  const mobileToolbar = (
    <Toolbar className={classes.toolbar}>
      {showSearchBar || forceSearchOpen ? (
        searchBar
      ) : (
        <>
          <div className={classes.titleContainer}>
            <Button
              color="inherit"
              component={Link}
              to={routes.home}
              className={classes.homeLink}
            >
              <Typography variant="h6">Basic Flashcards</Typography>
            </Button>
          </div>
          <IconButton color="inherit" onClick={() => setShowSearchBar(true)}>
            <Search />
          </IconButton>
          {loginProfile}
        </>
      )}
    </Toolbar>
  );

  const standardToolbar = (
    <Toolbar className={classes.toolbar}>
      <div className={classes.titleContainer}>
        <Button
          color="inherit"
          component={Link}
          to={routes.home}
          className={classes.homeLink}
        >
          <Typography variant="h6">Basic Flashcards</Typography>
        </Button>
      </div>
      {searchBar}
      {loginProfile}
    </Toolbar>
  );

  return (
    <MuiAppBar position="sticky">
      {menu}
      {isMobile ? mobileToolbar : standardToolbar}
    </MuiAppBar>
  );
}
