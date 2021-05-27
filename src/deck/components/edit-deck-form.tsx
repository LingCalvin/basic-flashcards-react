import {
  Button,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  TextFieldProps,
  Typography,
} from '@material-ui/core';
import { Add, Delete, ArrowUpward, ArrowDownward } from '@material-ui/icons';
import { useFieldArray, useForm } from 'react-hook-form';
import Card from '../../card/interfaces/card';
import { DeckVisibility } from '../types/deck-visibility';
import useStyles from './edit-deck-form.styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type FormValues = {
  title: string;
  description: string;
  visibility: DeckVisibility;
  cards: Card[];
};

const schema = yup.object().shape({
  title: yup.string().label('Title').required().max(255),
  description: yup.string().label('Description').max(4096),
  visibility: yup.string().label('Visibility').oneOf(['PRIVATE', 'PUBLIC']),
  cards: yup.array().of(
    yup.object().shape({
      sides: yup.array().of(
        yup.object().shape({
          text: yup.string().label('This').required().max(4096),
        })
      ),
    })
  ),
});

interface EditDeckFormProps {
  defaultValues?: FormValues;
  variant?: TextFieldProps['variant'];
  onSubmit: (value: FormValues) => void;
}

export default function EditDeckForm({
  defaultValues,
  variant,
  onSubmit,
}: EditDeckFormProps) {
  const classes = useStyles();

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { append, fields, move, remove } = useFieldArray({
    control,
    name: 'cards',
    keyName: 'key', // A Card already has an id field
  });

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.generalInfoContainer}>
        <TextField
          label="Title"
          variant={variant}
          defaultValue=""
          inputProps={{ 'aria-label': 'title', ...register('title') }}
          error={errors.title !== undefined}
          helperText={errors.title?.message}
        />
        <TextField
          label="Description"
          variant={variant}
          defaultValue=""
          inputProps={{
            'aria-label': 'description',
            ...register('description'),
          }}
          error={errors.description !== undefined}
          helperText={errors.description?.message}
        />
        <TextField
          label="Visibility"
          select
          variant={variant}
          defaultValue="PRIVATE"
          inputProps={{ 'aria-label': 'visibility', ...register('visibility') }}
          error={errors.visibility !== undefined}
          helperText={errors.visibility?.message}
        >
          <MenuItem value="PRIVATE">Private</MenuItem>
          <MenuItem value="PUBLIC">Public</MenuItem>
        </TextField>
      </div>

      <div className={classes.cardList}>
        {fields.map(({ key, sides }, index) => (
          <Paper className={classes.editCardTile} key={key}>
            <Typography variant="h6" component="div">{`Card ${
              index + 1
            }`}</Typography>
            <div className={classes.editCardTileFieldContainer}>
              <TextField
                label="Term"
                variant={variant}
                defaultValue={sides[0].text}
                inputProps={{
                  'aria-label': 'term',
                  ...register(`cards.${index}.sides.0.text` as const),
                }}
                error={errors.cards?.[index]?.sides?.[0]?.text !== undefined}
                helperText={errors.cards?.[index]?.sides?.[0]?.text?.message}
              />
              <TextField
                label="Definition"
                variant={variant}
                defaultValue={sides[1].text}
                inputProps={{
                  'aria-label': 'definition',
                  ...register(`cards.${index}.sides.1.text` as const),
                }}
                error={errors.cards?.[index]?.sides?.[1]?.text !== undefined}
                helperText={errors.cards?.[index]?.sides?.[1]?.text?.message}
              />
            </div>
            <div className={classes.editCardTileActionArea}>
              <IconButton
                aria-label="delete"
                onClick={() => remove(index)}
                disabled={fields.length <= 1}
              >
                <Delete />
              </IconButton>
              <IconButton
                aria-label="move up"
                onClick={() => move(index, index - 1)}
                disabled={index <= 0}
              >
                <ArrowUpward />
              </IconButton>
              <IconButton
                aria-label="move down"
                onClick={() => move(index, index + 1)}
                disabled={index >= fields.length - 1}
              >
                <ArrowDownward />
              </IconButton>
            </div>
          </Paper>
        ))}
      </div>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<Add />}
        onClick={() => append({ sides: [{ text: '' }, { text: '' }] })}
      >
        Add card
      </Button>
      <div className={classes.saveButtonContainer}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </div>
    </form>
  );
}
