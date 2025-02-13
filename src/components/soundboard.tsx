"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

type SoundItem = {
  word: string
  audioSrc: string
  imageUrl: string
}

const soundItems: SoundItem[] = [
  {
    word: "The BASED God 1",
    audioSrc: "/audio/the based god-.mp3",
    imageUrl:
      "/images/The basedgod button.png",
  },
  {
    word: "The BASED God 2",
    audioSrc: "/audio/Lil B Based Ext-.mp3",
    imageUrl:
      "/images/THE BG 2 Button.png",
  },
  {
    word: "BaseWorld",
    audioSrc: "/audio/ohmygod.mp3",
    imageUrl: "/images/OMG.png",
  },
  {
    word: "Oh My God",
    audioSrc: "/audio/OMG BG.mp3",
    imageUrl: "/images/OH GD BG.png",
  },
  {
    word: "I love you",
    audioSrc: "/audio/I love you.mp3",
    imageUrl: "/images/Iloveyou.png",
  },
  {
    word: "baselord",
    audioSrc: "/audio/baselord jesus.mp3",
    imageUrl: "/images/baselord.png",
  },
  {
    word: "Whoop",
    audioSrc: "/audio/whoop.mp3",
    imageUrl: "/images/Whoop.png",
  },
]

export default function Soundboard() {
  const [playing, setPlaying] = useState<string | null>(null)
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({})

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        // Stop all audio
        Object.values(audioRefs.current).forEach(audio => {
          audio?.pause()
          audio?.load()
        })
        setPlaying(null)
        // Prevent space from scrolling the page
        event.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])  // Remove playing from dependencies since we stop all audio

  const playSound = (item: SoundItem) => {
    if (playing) {
      audioRefs.current[playing]?.pause()
      audioRefs.current[playing]?.load()
    }
    audioRefs.current[item.word]?.play()
    setPlaying(item.word)
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-16">
      <div className="mb-8 flex justify-center">
        <Image
          src="/images/Soundboard button.png"
          alt="$MORE BASED SOUNDBOARD"
          width={800}
          height={100}
          className="max-w-full h-auto"
          priority
        />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {soundItems.map((item) => (
          <button
            key={item.word}
            className={`transition-all duration-300 ${playing === item.word ? "scale-95" : "hover:scale-105 hover:-translate-y-2"} bg-transparent p-0`}
            onClick={() => playSound(item)}
          >
            <div className="h-[60px] flex items-center">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.word}
                width={240}
                height={60}
                className="w-auto h-full object-contain"
              />
            </div>
            <audio 
              ref={el => { audioRefs.current[item.word] = el }} 
              src={item.audioSrc} 
              preload="auto" 
            />
          </button>
        ))}
      </div>
    </div>
  )
}

