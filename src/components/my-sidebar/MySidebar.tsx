import { Drawer, Toolbar, Divider, List, ListItem } from "@mui/material";
import React, { FC } from "react";

const MySidebar: FC = () => {
  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box"
        }
      }}
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
  );
};

export default MySidebar;
