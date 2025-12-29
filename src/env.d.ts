/// <reference types="astro/client" />

interface Window {
  audioController: {
    audioContext: AudioContext | null;
    audioBuffer: AudioBuffer | null;
    loopSource: AudioBufferSourceNode | null;
    masterGain: GainNode | null;
    isMuted: boolean;
    isInitialized: boolean;
    startEngine: () => void;
    play: () => void;
    toggleMute: () => void;
    updateButtonState: () => void;
  };
}
