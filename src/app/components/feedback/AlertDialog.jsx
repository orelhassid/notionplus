import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({
  onClick,
  children,
  title,
  description,
  cancelLabel,
  confirmLabel,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    onClick();
  };

  return (
    <>
      <div onClick={handleClickOpen}>{children}</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            justifyContent: "space-between",
          }}
        >
          <Button onClick={handleClose} color="primary">
            {cancelLabel}
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            {confirmLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

AlertDialog.defaultProps = {
  title: "Title",
  description: "Description",
  cancelLabel: "Close",
  confirmLabel: "Agree",
};
