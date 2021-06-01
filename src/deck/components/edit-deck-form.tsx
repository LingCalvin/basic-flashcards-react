import { yupResolver } from '@hookform/resolvers/yup';
import { Button, MenuItem } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useCallback } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Card from '../../card/interfaces/card';
import TextField, { TextFieldProps } from '../../common/components/text-field';
import useUniqueId from '../../common/hooks/use-unique-id';
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
  generalInfoSectionId?: string;
  cardListId?: string;
  submitButtonId?: string;
}

export default function EditDeckForm({
  defaultValues,
  variant,
  onSubmit,
  generalInfoSectionId,
  cardListId,
  submitButtonId,
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

  const handleDragEnd = useCallback(
    ({ source, destination }: DropResult) => {
      if (
        !destination ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      ) {
        return;
      }
      move(source.index, destination.index);
    },
    [move]
  );

  const droppableId = useUniqueId();

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <div id={generalInfoSectionId} className={classes.generalInfoContainer}>
        <TextField
          label="Title"
          required
          variant={variant}
          defaultValue=""
          inputProps={{ ...register('title') }}
          error={errors.title !== undefined}
          helperText={errors.title?.message}
        />
        <TextField
          label="Description"
          variant={variant}
          defaultValue=""
          inputProps={{ ...register('description') }}
          error={errors.description !== undefined}
          helperText={errors.description?.message}
        />
        <TextField
          label="Visibility"
          select
          variant={variant}
          defaultValue={defaultValues?.visibility ?? 'PRIVATE'}
          inputProps={{ ...register('visibility') }}
          error={errors.visibility !== undefined}
          helperText={errors.visibility?.message}
        >
          <MenuItem value="PRIVATE">Private</MenuItem>
          <MenuItem value="PUBLIC">Public</MenuItem>
        </TextField>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided) => (
            <div
              id={cardListId}
              className={classes.cardList}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {fields.map(
                (
                  {
                    key,
                    sides: [{ text: defaultTerm }, { text: defaultDefinition }],
                  },
                  index
                ) => (
                  <EditCardTile
                    key={key}
                    index={index}
                    variant={variant}
                    defaultTerm={defaultTerm}
                    defaultDefinition={defaultDefinition}
                    termError={errors.cards?.[index]?.sides?.[0]?.text?.message}
                    definitionError={
                      errors.cards?.[index]?.sides?.[1]?.text?.message
                    }
                    onRemove={remove}
                    onMove={move}
                    removeDisabled={fields.length <= 1}
                    moveUpDisabled={index === 0}
                    moveDownDisabled={index >= fields.length - 1}
                    register={register}
                  />
                )
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<Add />}
        onClick={() => append({ sides: [{ text: '' }, { text: '' }] })}
      >
        Add card
      </Button>
      <div className={classes.saveButtonContainer}>
        <Button
          id={submitButtonId}
          type="submit"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
