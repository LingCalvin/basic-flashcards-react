import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.appBar + 1,
  },
}));

export default useStyles;
