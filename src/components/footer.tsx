import Image from "next/image"

export default function Footer() {
  const socialIcons = [
    {
      name: "Twitter",
      src: "/images/x.png",
      href: "https://x.com/MoreClanker",
    },
    {
      name: "Farcaster",
      src: "/images/fc.png",
      href: "https://warpcast.com/~/channel/more",
    },
    {
      name: "Dex",
      src: "/images/dex.png",
      href: "https://dexscreener.com/base/0x2133a185bb136dc37a8520f770622fad34fd3ad4",
    },
    {
      name: "Interface",
      src: "/images/interface.png",
      href: "https://app.interface.social/token/8453/0x07ec3e57f9e41e8a66a88aef675d39c7cbc32dda",
    },
    {
      name: "Basescan",
      src: "/images/basescan.png",
      href: "https://basescan.org/token/0x07ec3E57f9e41e8a66A88AeF675d39c7cbC32DdA",
    },
    {
      name: "Telegram",
      src: "/images/tg.png",
      href: "https://t.me/MoreClanker",
    },
  ]

  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center space-x-6 mb-8">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center hover:opacity-75 transition-opacity"
              >
                <Image src={icon.src || "/placeholder.svg"} alt={icon.name} width={75} height={75} />
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} $MORE Token - You can always be MORE based.
          </p>
        </div>
      </div>
    </footer>
  )
}

