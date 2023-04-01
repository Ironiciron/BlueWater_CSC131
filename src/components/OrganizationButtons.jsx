import React, { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import LoginModal from "./LoginModal";

const OrganizationButtons = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Box>
        <Typography sx={{ fontFamily: "georgia" }} variant="h4">
          {props.name}
        </Typography>
        {/* // bgcolor: "#1b76d2" */}
        <Button
          sx={{ bgcolor: "#1b76d2" }}
          variant="text"
          onClick={handleOpen}
        >
          <Modal open={open} onClose={handleClose}>
            <Box
              position="absolute"
              top="25%"
              left="36%"
              sx={{
                backgroundColor: "#003987",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <LoginModal name={props.name} onClose={handleClose} />
            </Box>
          </Modal>
          <img src={props.logo} alt="Organization Logo" style={{ width: "200px", height: "150px" }} />
        </Button>
      </Box>
    </div>
  );
};

export default OrganizationButtons;
