'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"
import DexScreenerChart from "@/components/dex-screener-chart"
import Soundboard from "@/components/soundboard"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

const vehicles = [
  {
    title: "1990 BMW E30 325i",
    image: "/images/bmw1.jpg",
    gallery: [
      "/images/bmw2.jpg",
      "/images/bmw3.jpg",
      "/images/bmw4.jpg",
      "/images/bmw5.jpg",
      "/images/bmw6.jpg",
    ]
  },
  {
    title: "1989 Jeep Grand Wagoneer V8 4x4",
    image: "/images/jeep1.jpg",
    gallery: [
      "/images/jeep2.png",
      "/images/jeep3.png",
      "/images/jeep4.jpg",
      "/images/jeep5.jpg",
      "/images/jeep6.jpg",
    ]
  },
  {
    title: "1990s Mitsubishi Delica L300",
    image: "/images/delica1.jpg",
    gallery: [
      "/images/Delica 2.jpg",
      "/images/Delica3.jpg",
    ]
  },
  {
    title: "1975 Mercedes Benz 450 SLC",
    image: "/images/MB450-1.jpg",
    gallery: [
      "/images/MB450-2.jpg",
      "/images/MB450-3.jpg",
      "/images/MB450-4.jpg",
    ]
  },
  
  // Add more vehicles as needed
]

export default function Home() {
  const { toast } = useToast()
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleNextImage = () => {
    if (selectedVehicle?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedVehicle.gallery!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedVehicle?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedVehicle.gallery!.length - 1 : prev - 1
      );
    }
  };

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

          {/* Unique Vehicles section */}
          <section className="py-16 px-4">
            <div className="flex flex-col items-center mb-8">
              <a href="https://warpcast.com/~/channel/unique-vehicles" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/uvtitle.png"
                  alt="Unique Vehicles"
                  width={800}
                  height={500}
                  className="mb-4 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {vehicles.map((vehicle, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square cursor-pointer group"
                  onClick={() => {
                    setSelectedVehicle(vehicle);
                    setIsModalOpen(true);
                  }}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {vehicle.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

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

      {/* Add the modal component */}
      {isModalOpen && selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-75 flex items-center justify-center p-16">
          <div 
            className="relative rounded-lg max-w-4xl w-full"
            style={{
              backgroundImage: "url('/images/UV BG.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setCurrentImageIndex(0);
              }}
              className="absolute top-4 right-4 text-black hover:text-gray-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image container */}
            <div className="relative aspect-video">
              <Image
                src={selectedVehicle.gallery?.[currentImageIndex] || selectedVehicle.image}
                alt={selectedVehicle.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation buttons */}
            {selectedVehicle.gallery && selectedVehicle.gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Title */}
            <div className="p-4 text-white text-center">
              <h3 className="text-xl font-semibold">{selectedVehicle.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
