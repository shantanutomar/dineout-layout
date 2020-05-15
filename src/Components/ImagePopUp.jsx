import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const ImagePopUp = (props) => {

    return (
        <div>
          <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
            <DialogContent dividers>
              <div>
                <img src="https://i.ibb.co/VH3Bhxx/Profile-Pic-1-6-MB.jpg" alt="Profile-Pic-1-6-MB" 
                      border="0"></img>          
              </div>
            </DialogContent>
          </Dialog>
        </div>
  );
}

export default ImagePopUp;
