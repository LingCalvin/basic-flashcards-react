import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router';

interface AppBarWithBackButtonProps {
  title: string;
  onBack?: () => void;
}

export default function AppBarWithBackButton({
  title,
  onBack,
}: AppBarWithBackButtonProps) {
  const history = useHistory();
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <IconButton
          aria-label="back"
          edge="start"
          color="inherit"
          onClick={onBack ?? (() => history.goBack())}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
