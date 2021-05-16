import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core';

export default function AppBar() {
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Basic Flashcards</Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
