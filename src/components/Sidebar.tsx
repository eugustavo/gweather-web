'use client'

import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { FiWind, FiSun, FiEye, FiDroplet } from "react-icons/fi";

import { addPosition } from '@/store/slices/position';
import { useLocation } from '@/store/slices/location';

import { WeatherWidget } from './WeatherWidget';
import { CurrentWeather } from './CurrentWeather';
import { ForecastNextDays } from './ForecastNextDays';

export function Sidebar() {
  const { current } = useSelector(useLocation)
  const { location, forecast } = useSelector(useLocation)

  const dispatch = useDispatch()

  async function handleGetLocation(data: any) {
    const result = await geocodeByPlaceId(data.value.place_id)

    const position = {
      lat: result[0].geometry.location.lat(),
      lng: result[0].geometry.location.lng()
    }

    dispatch(addPosition(position))
  }

  return (
    <aside 
    className="
      border-r-2 border-gray/10 w-80 fixed left-0 top-0 bottom-0 p-6 max-[785px]:w-full max-[785px]:overflow-y-auto max-[785px]:border-r-0 max-[785px]:flex max-[785px]:flex-col"
    >
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          onChange: (value: any) => handleGetLocation(value),
          placeholder: 'Procurar cidade',
        }}
        apiOptions={{
          language: 'pt-BR',
        }}
      />

      <div className='flex mt-10 w-full items-center justify-center'>
        <h1 className='font-bold text-lg mr-1'>
          {location?.name},
        </h1>

        <span className='text-sm font-medium text-gray-400 whitespace-nowrap'>
          {location?.region || location?.country}
        </span>
      </div>

      <CurrentWeather />

      <div className='flex flex-col gap-4 mt-12'>
        <WeatherWidget title="Vento" value={`${current.wind_kph} km/h`} Icon={FiWind} />
        <WeatherWidget title="Index UV" value={`${current.uv}`} Icon={FiSun} />
        <WeatherWidget title="Visibilidade" value={`${current.vis_km} km`} Icon={FiEye} />
        <WeatherWidget title="Humidade" value={`${current.humidity}%`} Icon={FiDroplet} />
      </div>

      <div className='hidden mt-12 gap-6 max-[785px]:flex max-[785px]:flex-col'>
        <h1 className='text-lg font-bold text-gray-600'>Próximos dias</h1>
        {forecast.forecastday.map((forecast) => (
          <ForecastNextDays key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </aside>
  )
}