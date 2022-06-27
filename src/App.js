import React, { useCallback, useEffect, useRef } from "react";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import useSound from "use-sound";
import { MessageCard, AppBar, Footer } from "./components";
import { msgList } from "./constants";
import {
  flexCenterColumn,
  imageBlendModeList,
  colorPlatte,
} from "./styles/CommonStyles";
import correctSound from "./assests/audios/correct-ans.mp3";
import incorrectSound from "./assests/audios/incorrect-ans.mp3";
import "./App.scss";

const DURATION_MIX_BLEND_MODE = 3000;

export const App = () => {
  console.log("App: Rendering");
  const imageBlendRef = useRef(null);
  const messageCardRef = useRef(null);
  const [correctToggleSound] = useSound(correctSound);
  const [incorrectToggleSound] = useSound(incorrectSound);

  const correctToggleSoundPlay = useCallback(
    () => correctToggleSound(),
    [correctToggleSound]
  );
  const incorrectToggleSoundPlay = useCallback(
    () => incorrectToggleSound(),
    [incorrectToggleSound]
  );
  useEffect(() => {
    var i = 0;
    const mixBlendModeInterval = setInterval(() => {
      if (i === imageBlendModeList.length) i = 0;
      imageBlendRef.current.style.mixBlendMode = imageBlendModeList[i].mode;
      messageCardRef.current.style.color = imageBlendModeList[i].color;
      i++;
    }, DURATION_MIX_BLEND_MODE);

    return () => clearInterval(mixBlendModeInterval);
  }, []);

  const getAppBarChildren = () => {
    return (
      <>
        <Avatar sx={{ width: "2rem", height: "2rem" }}>
          <Typography variant="subtitle2">PD</Typography>
        </Avatar>
        <Typography
          variant="h6"
          color="text.primary"
          component="div"
          sx={{ marginLeft: "0.5rem" }}
        >
          Friendly Reminder
        </Typography>
      </>
    );
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Stack spacing={2}>
        <AppBar>{getAppBarChildren()}</AppBar>
        <Box
          ref={imageBlendRef}
          className="box"
          sx={{
            marginTop: "4rem !important",
          }}
        ></Box>

        <Box
          sx={{
            ...flexCenterColumn,
            marginTop: "7rem",
            position: "absolute",
            width: "100%",
            top: "23%",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: "fontWeightBold" }}
            >
              {"Today".toUpperCase()}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "70%",
              color: colorPlatte.text.primary,
            }}
            ref={messageCardRef}
          >
            <MessageCard
              messages={msgList}
              correctToggleSoundPlay={correctToggleSoundPlay}
              incorrectToggleSoundPlay={incorrectToggleSoundPlay}
            ></MessageCard>
          </Box>
        </Box>

        <Box>
          <Footer>
            {
              <Typography
                color="text.secondary"
                variant="subtitle2"
                sx={{
                  backgroundColor: "text.primary",
                  borderRadius: "1rem",
                  padding: "0.4rem 1rem",
                  opacity: "0.5",
                  fontWeight: "fontWeightBold",
                }}
              >
                @prismatic.dreams | 2022
              </Typography>
            }
          </Footer>
        </Box>
      </Stack>
    </Box>
  );
};
