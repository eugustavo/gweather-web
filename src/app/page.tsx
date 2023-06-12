'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setLocation, useLocation } from "@/store/slices/location"
import { addPosition, usePosition } from "@/store/slices/position"

import { ForecastNextDays } from "@/components/ForecastNextDays"

import { api } from "@/services/api"

export default function Home() {
  const { position } = useSelector(usePosition)
  const { forecast } = useSelector(useLocation)

  const dispatch = useDispatch()

  useEffect(() => {
    async function getPosition() {
      try {
        const { data } = await api.get('/forecast.json', {
          params: {
            q: `${position.lat},${position.lng}`,
            units: 'metric',
            days: 3,
          },
        })

        dispatch(setLocation(data))
      } catch (error) {
        console.log(error)
      }
    }

    getPosition()
  }, [dispatch, position])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(addPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }))
    })
  }, [dispatch])

  return (
    <main className="flex flex-col flex-1 p-2 w-full gap-4">
      {forecast.forecastday.map((forecast) => (
        <ForecastNextDays key={forecast.date} forecast={forecast} />
      ))}
    </main>
  )
}
