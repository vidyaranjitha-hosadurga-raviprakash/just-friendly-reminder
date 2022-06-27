import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { MessageCardDisplay } from "..";
import { MessageCardProps } from "../../models/";

export const MessageCard = React.memo(
  ({
    messages,
    correctToggleSoundPlay = () => {},
    incorrectToggleSoundPlay = () => {},
  }: MessageCardProps) => {
    console.log("MessageCard: Rendering");
    const [msgsState, setMsgsState] = useState(messages);
    const [activeSwitch, setActiveSwitch] = useState(-1);

    useEffect(() => {
      const activeSwitchState = msgsState[activeSwitch];
      if (activeSwitchState?.value === activeSwitchState?.expectedVal) {
        correctToggleSoundPlay();
        return;
      }

      incorrectToggleSoundPlay();
      const toggleTimeout = setTimeout(() => {
        const newMsgsState = [...msgsState];
        const updatedActiveSwitchState = {
          ...activeSwitchState,
          value: !activeSwitchState.value,
        };
        newMsgsState[activeSwitch] = updatedActiveSwitchState;
        setMsgsState(newMsgsState);
      }, 300);
      return () => clearTimeout(toggleTimeout);
    }, [
      msgsState,
      activeSwitch,
      correctToggleSoundPlay,
      incorrectToggleSoundPlay,
    ]);

    const onSwitchChangeHandler = useCallback(
      (msgState, index) => {
        const newMsgsState = [...msgsState];
        const updatedActiveSwitchState = {
          ...msgState,
          value: !msgState.value,
        };
        newMsgsState[index] = updatedActiveSwitchState;
        setMsgsState(newMsgsState);
        setActiveSwitch(index);
      },
      [msgsState]
    );

    return (
      <>
        <MessageCardDisplay
          messages={msgsState}
          changeHandler={onSwitchChangeHandler}
        />
      </>
    );
  }
);
