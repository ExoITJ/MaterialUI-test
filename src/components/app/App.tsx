import React, { FC } from "react";
import { Box, CssBaseline } from "@mui/material";
import MySidebar from "../my-sidebar";
import MyHeader from "../my-header";

const App: FC = () => {
  return (
    <Box sx={{ position: "fixed", height: "100%", width: "100%" }}>
      <CssBaseline />
      <MySidebar />
      <Box>
        <MyHeader />
      </Box>
    </Box>
  );
};

export default App;
