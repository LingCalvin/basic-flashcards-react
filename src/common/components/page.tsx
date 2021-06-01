import { Button, Link } from '@material-ui/core';
import { ReactNode } from 'react';
import useTitle from '../hooks/use-title';
import AppBar from './app-bar';
import useStyles from './page.styles';

export interface SkipLink {
  fragment: string;
  text: string;
}

export interface PageProps {
  title: string;
  skipLinks?: SkipLink[];
  children?: ReactNode;
}

export default function Page({ title, skipLinks, children }: PageProps) {
  const classes = useStyles();

  useTitle(title);

  const scrollToAnchor = (fragment: string) => {
    const element = document.querySelector(`#${fragment}`);
    element?.scrollIntoView();
    (element as HTMLElement)?.focus();
  };

  return (
    <>
      {skipLinks !== undefined && (
        <>
          {skipLinks.map(({ fragment, text }, i) => (
            // This would ideally just be a link, but fragment URLs won't work
            // because react-hash-router is being used
            <Link
              key={i}
              className={classes.skipLink}
              tabIndex={0}
              onClick={(e: any) => {
                e.target.blur();
                scrollToAnchor(fragment);
              }}
              component={Button}
              color="secondary"
              disableRipple
            >
              {text}
            </Link>
          ))}
        </>
      )}
      <div className={classes.page}>
        <AppBar />
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
}
