import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import Card from '../../card/interfaces/card';
import useStyles from './card-list.styles';

interface CardListProps {
  cards: Card[];
}

export default function CardList({ cards }: CardListProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {cards.map((card) => (
        <React.Fragment key={card.id ?? JSON.stringify(card)}>
          <Typography>{card.sides[0].text}</Typography>
          <Divider orientation="vertical" />
          <Typography>{card.sides[1].text}</Typography>
        </React.Fragment>
      ))}
    </div>
  );
}
