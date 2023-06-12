import Image from "next/image";
import { FiWind, FiSun, FiEye, FiDroplet } from "react-icons/fi";

import { WeatherWidget } from "./WeatherWidget";
import dayjs from "dayjs";

interface ForecastNextDaysProps {
  forecast: {
    date: string
    day: {
      maxtemp_c: number
      mintemp_c: number
      maxwind_kph: number
      avgvis_km: number
      avghumidity: number
      uv: number
      condition: {
        icon: string
      }
    }
  }
}

export function ForecastNextDays({ forecast }: ForecastNextDaysProps) {
  return (
    <div className='flex w-full flex-col p-6 rounded-md items-center border-2 border-gray-200'>
      <h1 className="text-gray-600 font-medium mb-4 capitalize">
        {dayjs(forecast.date).locale('pt-br').format('dddd, DD/MM')}
      </h1>

      <div className="flex flex-col items-center justify-center">
        <Image
          src={`https:${forecast.day.condition.icon}`}
          alt="Codição do tempo"
          width={64}
          height={64}
        />

        <div className="flex flex-row mt-2 mb-6 gap-6 max-[460px]:mb-0">
          <div>
            <span className="text-sm text-gray-400">Min</span>
            <h1 className="text-gray-900 font-bold">
              {forecast.day.mintemp_c}°
            </h1>
          </div>

          <div>
            <span className="text-sm text-gray-400">Max</span>
            <h1 className="text-gray-900 font-bold">
              {forecast.day.maxtemp_c}°
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full lg:grid-cols-4 max-[460px]:hidden">
        <WeatherWidget title="Vento" value={`${forecast.day.maxwind_kph} km/h`} Icon={FiWind} />
        <WeatherWidget title="Index UV" value={`${forecast.day.uv}`} Icon={FiSun} />
        <WeatherWidget title="Visibilidade" value={`${forecast.day.avgvis_km} km`} Icon={FiEye} />
        <WeatherWidget title="Humidade" value={`${forecast.day.avghumidity}%`} Icon={FiDroplet} />
      </div>
    </div>
  )
}