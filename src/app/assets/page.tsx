import Image from "next/image"
import { promises as fs } from "fs"
import path from "path"

async function getAssets() {
  const publicDir = path.join(process.cwd(), "public")
  const files = await fs.readdir(publicDir)
  return files.filter((file) => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file))
}

export default async function AssetsPage() {
  const assets = await getAssets()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Asset Reference</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {assets.map((asset) => (
          <div key={asset} className="border rounded-lg p-4 flex flex-col items-center">
            <Image src={`/${asset}`} alt={asset} width={100} height={100} className="object-contain h-24 w-24 mb-2" />
            <p className="text-sm text-center break-all">{asset}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

