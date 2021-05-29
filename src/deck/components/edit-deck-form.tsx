import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  TextFieldProps,
  Typography,
} from '@material-ui/core';
import { Add, ArrowDownward, ArrowUpward, Delete } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { SubmitErrorHandler, useFieldArray, useForm } from 'react-hook-form';
import { Virtuoso } from 'react-virtuoso';
import * as yup from 'yup';
import Card from '../../card/interfaces/card';
import { DeckVisibility } from '../types/deck-visibility';
import useStyles from './edit-deck-form.styles';

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
    getValues,
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues,
    // reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const { append, fields, move, remove } = useFieldArray({
    control,
    name: 'cards',
    keyName: 'key', // A Card already has an id field
  });
  const onInvalid: SubmitErrorHandler<FormValues> = (errors) => {
    if (
      !errors.title &&
      !errors.description &&
      !errors.visibility &&
      errors.cards !== undefined
    ) {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      {Object.values(errors).length > 0 && (
        <Alert color="error">Please correct all errors.</Alert>
      )}
      <div className={classes.generalInfoContainer}>
        <TextField
          label="Title"
          required
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
          defaultValue={defaultValues?.visibility ?? 'PRIVATE'}
          inputProps={{ 'aria-label': 'visibility', ...register('visibility') }}
          error={errors.visibility !== undefined}
          helperText={errors.visibility?.message}
        >
          <MenuItem value="PRIVATE">Private</MenuItem>
          <MenuItem value="PUBLIC">Public</MenuItem>
        </TextField>
      </div>

      <Virtuoso
        useWindowScroll
        data={fields}
        computeItemKey={(index) => fields[index].key}
        itemContent={(index) => {
          const { sides } = getValues('cards')[index];
          return (
            <div
              className={index > 0 ? classes.editCardTileContainer : undefined}
            >
              <Paper className={classes.editCardTile}>
                <Typography variant="h6" component="div">{`Card ${
                  index + 1
                }`}</Typography>
                <div className={classes.editCardTileFieldContainer}>
                  <TextField
                    label="Term"
                    required
                    variant={variant}
                    defaultValue={sides[0].text}
                    inputProps={{
                      'aria-label': 'term',
                      ...register(`cards.${index}.sides.0.text` as const),
                    }}
                    error={
                      errors.cards?.[index]?.sides?.[0]?.text !== undefined
                    }
                    helperText={
                      errors.cards?.[index]?.sides?.[0]?.text?.message
                    }
                  />
                  <TextField
                    label="Definition"
                    required
                    variant={variant}
                    defaultValue={sides[1].text}
                    inputProps={{
                      'aria-label': 'definition',
                      ...register(`cards.${index}.sides.1.text` as const),
                    }}
                    error={
                      errors.cards?.[index]?.sides?.[1]?.text !== undefined
                    }
                    helperText={
                      errors.cards?.[index]?.sides?.[1]?.text?.message
                    }
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
            </div>
          );
        }}
      />

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
