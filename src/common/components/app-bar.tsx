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
import clsx from 'clsx';
import { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import CredentialsContext from '../../auth/contexts/credentials.context';
import { authService } from '../../auth/services/auth.service';
import useIsMobile from '../hooks/use-is-mobile';
import routes from '../../router/constants/routes';
import useStyles from './app-bar.styles';

export default function AppBar() {
  const classes = useStyles();

  const location = useLocation();

  const isMobile = useIsMobile();

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const credentials = useContext(CredentialsContext);

  const closeMenu = () => setMenuAnchor(null);
  const history = useHistory();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const qs = new URLSearchParams(location.search);
  const from = qs.get('from');
  const previousLocation = from ?? routes.home;

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
      <MenuItem
        onClick={() => {
          closeMenu();
          history.push(routes.accountSettings);
        }}
      >
        Manage account
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMenuAnchor(null);
          authService.logOut().then(() => history.push(routes.home));
        }}
      >
        Sign out
      </MenuItem>
    </Menu>
  );

  const avatar = (
    <Avatar>
      <Typography className={classes.avatarText} component="div">
        {credentials?.username.substring(0, 1).toLocaleUpperCase()}
      </Typography>
    </Avatar>
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
    <Button
      className={classes.button}
      component={Link}
      to={routes.login}
      color="inherit"
    >
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
            search: `?from=${encodeURIComponent(
              location.pathname
            )}&term=${encodeURIComponent(searchTerm)}`,
          });
        }}
      >
        <InputBase
          value={searchTerm}
          autoFocus={isMobile}
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
                <IconButton
                  aria-label="close search"
                  onClick={
                    location.pathname === routes.deckSearch
                      ? () => {
                          setShowSearchBar(false);
                          setSearchTerm('');
                          history.push(previousLocation);
                        }
                      : () => {
                          setShowSearchBar(false);
                          setSearchTerm('');
                        }
                  }
                >
                  <Close />
                </IconButton>
              </InputAdornment>
            ) : undefined
          }
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </Paper>
  );

  const mobileToolbar = (
    <Toolbar className={classes.toolbar}>
      {location.pathname === routes.deckSearch || showSearchBar ? (
        searchBar
      ) : (
        <>
          <div className={classes.titleContainer}>
            <Button
              color="inherit"
              component={Link}
              to={routes.home}
              className={clsx(classes.button, classes.homeLink)}
            >
              <Typography variant="h6" component="span">
                Basic Flashcards
              </Typography>
            </Button>
          </div>
          <IconButton
            aria-label="toggle search"
            color="inherit"
            onClick={() => setShowSearchBar(true)}
          >
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
          className={clsx(classes.button, classes.homeLink)}
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
