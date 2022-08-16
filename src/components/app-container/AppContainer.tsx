import React, { FC } from "react";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import { PATHS } from "../contrib/consts/route-paths";

const AppContainer: FC = () => {
  return (
    <Container>
      <Routes>
        <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </Container>
  );
};

export default AppContainer;
