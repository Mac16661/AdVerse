import React, { useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  DialogActions 
} from '@mui/material/';

function PopUpInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value:', inputValue);
    setIsOpen(false);
  };

  //@ts-ignore
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Popup
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Enter your input</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField 
              label="Enter something" 
              value={inputValue} 
              onChange={handleInputChange} 
              fullWidth 
              margin="dense"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopUpInput;