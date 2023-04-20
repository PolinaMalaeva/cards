import Service from "@/components/service";
import Head from "next/head";

export type ServiceType = {
  "title": string
  "description": string
  "sticker": string | null
}

export const services: ServiceType[] = [
  {
    "title": "DEX",
    "description": "Decentralized exchange is a peer-to-peer marketplace where transactions occur directly between crypto traders.",
    "sticker": "100k+ traders"
  },
  {
    "title": "NFT Marketplace",
    "description": "Platform is gaining traction and driving developers and businesses to make a digital items sell.",
    "sticker": null
  },
  {
    "title": "NFT Generation",
    "description": "Create unique digital NFT’s collections without coding.",
    "sticker": null
  },
  {
    "title": "Launchpads",
    "description": "Decentralized exchange (DEX)-based platform where crypto projects are introduced and can obtain funding.",
    "sticker": null
  },
  {
    "title": "Node",
    "description": "Integral part of the blockchain to validate transactions and keep the network safe.",
    "sticker": null
  },
  {
    "title": "Landing Pages",
    "description": "Web page, created specifically for a marketing or advertising campaign.",
    "sticker": null
  },
  {
    "title": "Wallets",
    "description": "Software that enables users to store and use cryptocurrency.",
    "sticker": null
  },
  {
    "title": "Smart Contracts",
    "description": "Computer programs or protocols for automated transactions that are stored on a blockchain and run in response to meeting certain conditions.",
    "sticker": null
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Cards</title>
      </Head>
      <div className={'flex flex-wrap justify-center gap-4 mx-auto max-w-6xl py-20 px-4'}>
        {services.map((item, index) =>
          <Service key={`service` + index}
                   service={item}
                   index={index} />
        )}
      </div>
    </>
  )
}
