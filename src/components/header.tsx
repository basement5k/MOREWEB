"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()

  const scrollToSoundboard = () => {
    // First, navigate to the home page if not already there
    router.push("/")

    // Then, scroll to the soundboard section
    setTimeout(() => {
      const soundboardSection = document.getElementById("soundboard")
      if (soundboardSection) {
        soundboardSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100) // Small delay to ensure navigation has completed
  }

  const scrollToGallery = () => {
    // First, navigate to the home page if not already there
    router.push("/")

    // Then, scroll to the gallery section
    setTimeout(() => {
      const gallerySection = document.getElementById("gallery")
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100) // Small delay to ensure navigation has completed
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg.svg w-full py-6 z-50 shadow-lg backdrop-blur-sm bg-white/30">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex-grow cursor-pointer" onClick={scrollToSoundboard}>
            <Image
              src="/images/MORE BASED.png"
              alt="$MORE BASED"
              width={400}
              height={70}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-4">
            <div onClick={scrollToGallery} className="transition-transform hover:scale-105">
              <Image
                src="/images/gallery.png"
                alt="Gallery"
                width={300}
                height={45}
                className="cursor-pointer"
              />
            </div>
            <a
              href="https://app.uniswap.org/explore/tokens/base/0x07ec3e57f9e41e8a66a88aef675d39c7cbc32dda"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/Buy $MORE button.png"
                alt="Buy $MORE"
                width={300}
                height={45}
                className="cursor-pointer"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
