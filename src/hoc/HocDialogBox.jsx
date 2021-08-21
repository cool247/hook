import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.error.main,
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
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
    class TheHOC extends React.Component {
      state = { open: false };

      handleOpen = () => {
        this.setState({ open: true });
      };

      handleClose = () => {
        this.setState({ open: false });
      };

      render() {
        console.log(title);
        // And it renders the component it was given
        return (
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleOpen}
            >
              Open alert dialog
            </Button>
            <div style={{ minWidth: "350px", minHeight: "500px" }}>
              <Dialog open={this.state.open}>
                <DialogTitle
                  id="customized-dialog-title"
                  onClose={this.handleClose}
                  style={{ color: "white" }}
                >
                  {title}
                </DialogTitle>
                <DialogContent>
                  <WrappedComponent {...this.props} />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={this.handleClose}
                    color="secondary"
                    variant="contained"
                    size="small"
                  >
                    close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        );
      }
    }
    return TheHOC;
  };

export default CustomizedDialogs;
