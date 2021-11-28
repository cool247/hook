import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  MuiDialogActions,
  Button,
  Dialog,
  Divider,
  MuiDialogTitle,
  MuiDialogContent,
  Typography,
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(0),
    backgroundColor: theme.palette.primary.main,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    // color: theme.palette.error.main,
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CustomizedDialogs =
  ({ title }) =>
  (WrappedComponent) => {
    // It creates a new wrapper component...
    return class TheHOC extends React.Component {
      state = { open: false };

      handleOpen = () => {
        this.setState({ open: true });
      };

      handleClose = () => {
        this.setState({ open: false });
      };

      render() {
        return (
          <>
            <Button variant="outlined" color="primary" onClick={this.handleOpen}>
              Open alert dialog
            </Button>
            <Dialog open={this.state.open} maxWidth="xs" fullWidth>
              <DialogTitle
                style={{ padding: '0', margin: '0', color: 'white', paddingLeft: '16px' }}
                onClose={this.handleClose}
              >
                {title}
              </DialogTitle>
              <DialogContent dividers style={{ padding: '16px' }}>
                <WrappedComponent {...this.props} />
              </DialogContent>
              <Divider />
              <DialogActions>
                <Button onClick={this.handleClose} color="secondary" variant="contained" size="small">
                  close
                </Button>
              </DialogActions>
            </Dialog>
          </>
        );
      }
    };
  };

export default CustomizedDialogs;
