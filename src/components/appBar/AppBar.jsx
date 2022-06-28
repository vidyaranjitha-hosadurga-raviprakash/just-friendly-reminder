import React from "react";
import { Box, AppBar as MuiAppBar, Toolbar } from "@mui/material";

export const AppBar = React.memo(({ getAppBarProps }) => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <MuiAppBar position="static" color="primary">
        <Toolbar variant="dense">{getAppBarProps()}</Toolbar>
      </MuiAppBar>
    </Box>
  );
});
