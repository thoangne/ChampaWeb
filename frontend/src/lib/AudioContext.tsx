import { createContext, useContext, useState, useRef, useEffect, type ReactNode } from "react";

interface AudioContextType {
  isAudioPlaying: boolean;
  toggleAudio: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isAudioPlaying: false,
  toggleAudio: () => {},
  playAudio: () => {},
  pauseAudio: () => {},
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio.mp4");
    audio.loop = true;
    audio.preload = "auto";

    audio.onended = () => {
      setIsAudioPlaying(false);
    };

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch((err) => {
          console.warn("Autoplay was prevented by browser policy:", err);
          setIsAudioPlaying(false);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isAudioPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isAudioPlaying,
        toggleAudio,
        playAudio,
        pauseAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
