import React from "react";
import { Grid, Typography } from "@mui/material";
import { IOSSwitch } from "../../components";
import { flexCenter } from "../../styles/CommonStyles";
type MessageCardDisplayProps = {
  messages: {
    message: string;
    value: boolean;
    expectedVal: boolean;
  }[];
  changeHandler: Function;
};
export const MessageCardDisplay = React.memo(
  ({ messages, changeHandler }: MessageCardDisplayProps) => {
    return (
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{ padding: "1rem 1rem" }}
      >
        {messages.map((msgState, index) => {
          return (
            <Grid container item key={index} sx={{ ...flexCenter }}>
              <Grid item xs={9} sm={8} md={8} lg={6}>
                <Typography variant="h6" sx={{ fontWeight: "fontWeightBold" }}>
                  {msgState.message.toUpperCase()}
                </Typography>
              </Grid>
              <Grid item>
                <IOSSwitch
                  checked={msgState.value}
                  onChange={() => changeHandler(msgState, index)}
                ></IOSSwitch>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    );
  }
);
