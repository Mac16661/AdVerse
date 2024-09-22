import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material/";
import PricingButton from "./Button";

function PopUpInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org_name: "",
    image: "",
    file: null,
    platforms: [],
  });

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input value:", formData);
    setIsOpen(false);
    window.location.reload();
  };

  //@ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        marginRight: "50px",
        marginBottom: "30px",
        zIndex: 1, // Ensure it's on top of other elements
        borderRadius: "3rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <PricingButton click={handleClickOpen} label="CREATE NEW" />
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Create New Ad</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name your campaign"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Organization name"
              name="org_name"
              value={formData.org_name}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Image url"
              name="image"
              value={formData.image}
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
