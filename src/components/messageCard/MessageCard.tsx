import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { MessageCardDisplay } from "..";
import { MessageCardProps, MessageType } from "../../models/";

export const MessageCard = React.memo(
  ({
    messages,
    correctToggleSoundPlay = () => {},
    incorrectToggleSoundPlay = () => {},
  }: MessageCardProps) => {
    console.log("MessageCard: Rendering");
    const [msgsState, setMsgsState] = useState(messages);
    const [activeSwitch, setActiveSwitch] = useState(-1);

    const updateMsgsState = (
      updatedCurrentSwitchState: MessageType,
      currentSwitch: number
    ) => {
      const newMsgsState = [...msgsState];
      newMsgsState[currentSwitch] = updatedCurrentSwitchState;
      setMsgsState(newMsgsState);
    };

    useEffect(() => {
      const activeSwitchState = msgsState[activeSwitch];
      if (activeSwitchState?.value === activeSwitchState?.expectedVal) {
        correctToggleSoundPlay();
        return;
      }

      incorrectToggleSoundPlay();
      const toggleTimeout = setTimeout(() => {
        const updatedActiveSwitchState = {
          ...activeSwitchState,
          value: !activeSwitchState.value,
        };
        updateMsgsState(updatedActiveSwitchState, activeSwitch);
      }, 300);
      return () => clearTimeout(toggleTimeout);
    }, [msgsState, activeSwitch]);

    const onSwitchChangeHandler = useCallback(
      (msgState, index) => {
        const updatedActiveSwitchState = {
          ...msgState,
          value: !msgState.value,
        };
        updateMsgsState(updatedActiveSwitchState, index);
        setActiveSwitch(index);
      },
      [msgsState, activeSwitch]
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
