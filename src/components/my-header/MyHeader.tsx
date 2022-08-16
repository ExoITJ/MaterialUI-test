import React, { FC } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const MyHeader: FC = () => {
  return (
    <AppBar position="fixed" sx={{ width: `calc(100% - 250px)` }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Шапка
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyHeader;
