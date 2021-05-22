import {
  AppBar as MuiAppBar,
  Avatar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CredentialsContext from '../../auth/contexts/credentials.context';
import { authService } from '../../auth/services/auth.service';
import routes from '../../router/constants/routes';
import useStyles from './app-bar.styles';

export default function AppBar() {
  const classes = useStyles();

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const credentials = useContext(CredentialsContext);

  const closeMenu = () => setMenuAnchor(null);
  const history = useHistory();

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

  return (
    <MuiAppBar position="sticky">
      {menu}
      <Toolbar>
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
        {authService.isAuthenticated() ? (
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
        )}
      </Toolbar>
    </MuiAppBar>
  );
}
