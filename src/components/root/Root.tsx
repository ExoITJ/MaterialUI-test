import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../app/App";

const Root: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  );
};

export default Root;
