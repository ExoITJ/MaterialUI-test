import React, { FC } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem
} from "@mui/material";

const App: FC = () => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          maxWidth: `calc(100% - ${drawerWidth}px)`
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ width: drawerWidth, flexShrink: 0 }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text}>{text}</ListItem>
          ))}
        </List>
        <Divider />
        <List disablePadding>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text}>{text}</ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default App;
