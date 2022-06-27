import React from "react";
import { Box } from "@mui/material";
import { flexCenter } from "../../styles/CommonStyles";
export const Footer = ({ children }) => {
  console.log("Footer: Rendering");
  return <Box sx={{ ...flexCenter, margin: "1rem 0rem" }}>{children}</Box>;
};
