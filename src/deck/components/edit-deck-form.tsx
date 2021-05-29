import { yupResolver } from '@hookform/resolvers/yup';
import { Button, MenuItem, TextField, TextFieldProps } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { memo } from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { Virtuoso } from 'react-virtuoso';
import * as yup from 'yup';
import Card from '../../card/interfaces/card';
import { DeckVisibility } from '../types/deck-visibility';
import EditCardTile, { EditCardTileProps } from './edit-card-tile';
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

const WrappedCardTile = memo(
  ({
    className,
    ...editCardTileProps
  }: EditCardTileProps & { className?: string }) => (
    <div className={className}>
      <EditCardTile {...editCardTileProps} />
    </div>
  )
);

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

      <FormProvider {...formMethods}>
        <Virtuoso
          useWindowScroll
          data={fields}
          computeItemKey={(index) => fields[index].key}
          itemContent={(index) => (
            <WrappedCardTile
              // Ideally, spacing would be handled by the gap CSS property.
              // However, react-virtuoso does not support this.
              className={index > 0 ? classes.editCardTileContainer : undefined}
              index={index}
              variant="outlined"
              removeDisabled={fields.length <= 1}
              moveUpDisabled={index <= 0}
              moveDownDisabled={index >= fields.length - 1}
              onRemove={remove}
              onMove={move}
            />
          )}
        />
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
