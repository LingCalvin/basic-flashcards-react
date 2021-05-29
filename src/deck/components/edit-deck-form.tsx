import { yupResolver } from '@hookform/resolvers/yup';
import { Button, MenuItem, TextField, TextFieldProps } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Card from '../../card/interfaces/card';
import { DeckVisibility } from '../types/deck-visibility';
import EditCardTile from './edit-card-tile';
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

  const formMethods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods;
  const { append, fields, move, remove } = useFieldArray({
    control,
    name: 'cards',
    keyName: 'key', // A Card already has an id field
  });

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
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

      <FormProvider {...formMethods}>
        <div className={classes.cardList}>
          {fields.map(({ key }, index) => (
            <EditCardTile
              key={key}
              index={index}
              onRemove={remove}
              onMove={move}
            />
          ))}
        </div>
      </FormProvider>

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
