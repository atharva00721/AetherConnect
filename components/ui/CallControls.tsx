import {
  CancelCallButton,
  ToggleAudioPreviewButton,
  ToggleAudioOutputButton,
  ScreenShareButton,
  RecordCallButton,
  SpeakingWhileMutedNotification,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
} from "@stream-io/video-react-sdk";

import type { CallControlsProps } from "@stream-io/video-react-sdk";

export const CallControls = ({ onLeave }: CallControlsProps) => (
  <div className="flex gap-3 my-2 flex-wrap">
    <SpeakingWhileMutedNotification>
      <ToggleAudioPublishingButton />
    </SpeakingWhileMutedNotification>
    <ToggleVideoPublishingButton />
    <CancelCallButton onLeave={onLeave} />
    <RecordCallButton />
    <ScreenShareButton />
  </div>
);
