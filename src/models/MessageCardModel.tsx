export type MessageCardProps = {
  messages: MessageType[];
  correctToggleSoundPlay: Function;
  incorrectToggleSoundPlay: Function;
};

export type MessageType = {
  message: string;
  value: boolean;
  expectedVal: boolean;
};
