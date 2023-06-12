import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ForescastProps {
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

interface LocationProps {
  location: {
    name: string
    region: string
    localtime: string
    country: string
  }
  current: {
    temp_c: number
    wind_kph: number
    uv: number
    vis_km: number
    humidity: number
    condition: {
      icon: string
    }
  }
  forecast: {
    forecastday: ForescastProps[]
  }
}

interface LocationState {
  data: LocationProps
}

const INITIAL_STATE: LocationState = {
  data: {
    location: {
      name: '',
      region: '',
      localtime: '',
      country: '',
    },
    current: {
      temp_c: 0,
      wind_kph: 0,
      uv: 0,
      vis_km: 0,
      humidity: 0,
      condition: {
        icon: '',
      },
    },
    forecast: {
      forecastday: [],
    },
  },
} as LocationState

const sliceLocation = createSlice({
  name: 'location',
  initialState: INITIAL_STATE,
  reducers: {
    setLocation: (state, { payload }: PayloadAction<LocationProps>) => {
      if (!payload) return

      state.data = payload
    },
  },
})

export default sliceLocation.reducer

export const { setLocation } = sliceLocation.actions

export const useLocation = (state: any) => {
  return state.location.data as LocationProps
}
