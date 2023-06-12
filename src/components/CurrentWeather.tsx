import dayjs from "dayjs"
import Image from "next/image"
import { useSelector } from "react-redux"

import { useLocation } from "@/store/slices/location"

export function CurrentWeather() {
  const { current } = useSelector(useLocation)
  const { location } = useSelector(useLocation)

  return (
    <>
      <div className='flex w-full mt-20 items-center justify-center'>
        <Image
          src={current?.condition?.icon ? `https:${current?.condition?.icon}` : ''}
          alt="Codição do tempo"
          width={64}
          height={64}
        />
      </div>

      <div className='flex flex-col mt-4 w-full items-center justify-center'>
        <h1 className='font-bold text-5xl'>
          {current.temp_c}°
        </h1>

        <span className='text-md text-gray-400 mt-2'>
          Hoje, {dayjs(location.localtime).format('DD/MM')}
        </span>
      </div>
    </>
  )
}