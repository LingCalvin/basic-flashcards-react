import { Avatar as MuiAvatar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './avatar.styles';

export interface AvatarProps {
  username?: string;
  className?: string;
  typographyClassName?: string;
}

export default function Avatar({
  username,
  className,
  typographyClassName,
}: AvatarProps) {
  const classes = useStyles();
  return (
    <MuiAvatar className={clsx(classes.root, className)} aria-hidden>
      {username !== undefined && (
        <Typography
          className={clsx(classes.text, typographyClassName)}
          component="div"
        >
          {username.substring(0, 1).toLocaleUpperCase()}
        </Typography>
      )}
    </MuiAvatar>
  );
}
