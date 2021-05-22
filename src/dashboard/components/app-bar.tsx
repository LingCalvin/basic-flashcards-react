import {
  AppBar as MuiAppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import routes from '../../router/constants/routes';
import useStyles from './app-bar.styles';

export default function AppBar() {
  const classes = useStyles();
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <Button
          color="inherit"
          component={Link}
          to={routes.home}
          className={classes.homeLink}
        >
          <Typography variant="h6">Basic Flashcards</Typography>
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
}
