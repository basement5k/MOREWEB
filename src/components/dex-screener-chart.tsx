"use client"

import { useEffect, useRef } from "react"

export default function DexScreenerChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const script = document.createElement("script")
      script.src = "https://widgets.dexscreener.com/main.js"
      script.async = true
      chartRef.current.appendChild(script)
    }
  }, [])

  return (
    <div ref={chartRef} className="w-full md:w-1/2 h-[600px]">
      <div id="dexscreener-embed" className="w-full h-full">
        <iframe
          src="https://dexscreener.com/base/0x2133a185bb136dc37a8520f770622fad34fd3ad4?embed=1&theme=dark&trades=0&info=0"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}

