import React from "react";
import { Box, AppBar as MuiAppBar, Toolbar } from "@mui/material";

export const AppBar = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <MuiAppBar position="static" color="primary">
        <Toolbar variant="dense">{children}</Toolbar>
      </MuiAppBar>
    </Box>
  );
};
