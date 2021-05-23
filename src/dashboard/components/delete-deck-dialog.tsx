import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogProps,
} from '@material-ui/core';

interface DeleteDeckDialogProps {
  deckTitle: string;
  open: DialogProps['open'];
  onBackDropClick?: DialogProps['onBackdropClick'];
  onCancel: () => void;
  onDelete: () => void;
  onExited: DialogProps['onExited'];
}

export default function DeleteDeckDialog({
  deckTitle,
  open,
  onBackDropClick,
  onCancel,
  onDelete,
  onExited,
}: DeleteDeckDialogProps) {
  return (
    <Dialog open={open} onBackdropClick={onBackDropClick} onExited={onExited}>
      <DialogTitle>Delete deck?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete deck "{deckTitle}"? This action cannot
          be undone.
        </DialogContentText>
        <DialogActions>
          <Button color="primary" autoFocus onClick={onCancel}>
            Cancel
          </Button>
          <Button color="primary" onClick={onDelete}>
            Delete
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
