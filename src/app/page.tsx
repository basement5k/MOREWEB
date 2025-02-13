'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"
import DexScreenerChart from "@/components/dex-screener-chart"
import Soundboard from "@/components/soundboard"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const { toast } = useToast()

  const copyToClipboard = () => {
    const address = "0x07ec3E57f9e41e8a66A88AeF675d39c7cbC32DdA"
    navigator.clipboard.writeText(address)
    toast({
      title: "Address Copied!",
      description: "Contract address has been copied to your clipboard.",
      duration: 2000,
    })
  }

  const galleryItems = [
    {
      type: "image",
      src: "/images/Dex Profile Image $MORE.jpg",
      alt: "Gallery Image 1",
    },
    {
      type: "image",
      src: "/images/holdindg breath.jpg",
      alt: "Gallery Image 2",
    },
    {
      type: "video",
      src: "/images/More jesse based god.mp4",
      alt: "Gallery Video 2",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="landing-bg w-full h-full" />
      </div>
      <div className="relative z-0">
        <Header />
        <main className="flex-grow container mx-auto px-4 pt-64 pb-24">
          {/* Top Section with increased spacing */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-48">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/more everything.png"
                alt="More Manifesto"
                width={600}
                height={400}
                className="max-w-full h-auto"
                priority
              />
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/images/more-kylo-ren.gif"
                alt="MORE Kylo Ren"
                width={700}
                height={480}
                className="rounded-lg shadow-lg max-w-full"
                priority
              />
            </div>
          </div>

          {/* Soundboard Section */}
          <div id="soundboard" className="mb-48">
            <Soundboard />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-48 mb-48">
            <DexScreenerChart />
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col gap-8">
              <div className="cursor-pointer" onClick={copyToClipboard}>
                <Image
                  src="/images/moreCA.png"
                  alt="Contract Address"
                  width={720}
                  height={200}
                  className="max-w-full h-auto"
                />
              </div>
              <Image
                src="/images/About.png"
                alt="About $MORE"
                width={700}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Gallery Section */}
          <div id="gallery" className="mb-16">
            <div className="flex justify-center mb-12">
              <Image
                src="/images/gallery.png"
                alt="Gallery"
                width={400}
                height={80}
                className="max-w-full h-auto"
                priority
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      controls
                      muted
                      loop
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
