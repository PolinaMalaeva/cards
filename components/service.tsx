import Sticker from "./sticker";
import {ServiceType} from "@/pages";
import React, {useRef} from "react";

const Service = ({service}: { service: ServiceType }) => {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const hoverCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current instanceof HTMLDivElement) {
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      cardRef.current.style.setProperty('--cursor-x', `${x}`)
      cardRef.current.style.setProperty('--cursor-y', `${y}`)
    }
  }

  return (
    <>
      <div ref={cardRef}
           className='card group h-60 w-full relative md:max-w-88 bg-coolGray px-7 pt-10 pb-7 cursor-pointer'
           onMouseMove={(e) => hoverCard(e)}>
        <div className={`relative z-10`}>
          {service.title &&
              <h3 className="font-neueMachina text-3xl text-white">
                {service.title}
              </h3>}
          {service.description &&
              <p className="text-gray-400 text-base mt-4">
                {service.description}
              </p>}
          {service.sticker &&
              <Sticker text={service.sticker} />}
        </div>
      </div>
    </>
  )
}

export default Service