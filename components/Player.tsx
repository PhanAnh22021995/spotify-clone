import {
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

const isPlaying = true;

const Player = () => {
  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      {/* Left */}
      <div className="flex items-center space-x-4">SELECTED_SONG</div>

      {/* Center */}
      <div className="flex justify-evenly items-center">
        <ArrowsRightLeftIcon className="icon" />
        <BackwardIcon className="icon" />
        {isPlaying ? (
          <PauseIcon className="icon" />
        ) : (
          <PlayCircleIcon className="icon" />
        )}
        <ForwardIcon className="icon" />
        <ForwardIcon className="icon" />
        <ForwardIcon className="icon" />
        <ForwardIcon className="icon" />
        <ForwardIcon className="icon" />
        <ForwardIcon className="icon" />
        <ArrowPathIcon className="icon" />

        <ArrowPathIcon className="icon" />
        <ArrowPathIcon className="icon" />
        <ArrowPathIcon className="icon" />
        <ArrowPathIcon className="icon" />
      </div>

      {/* Right */}
      <div className="flex justify-end items-center pr-5 space-x-3 md:space-x-4">
        <SpeakerWaveIcon className="icon" />
        <input type="range" min={0} max={100} className="w-20 md:w-auto" />
      </div>
    </div>
  );
};

export default Player;
