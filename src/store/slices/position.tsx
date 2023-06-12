import { createSlice } from '@reduxjs/toolkit'

interface PositionState {
  position: {
    lat: number
    lng: number
  }
}

const INITIAL_STATE: PositionState = {
  position: {
    lat: -15.7217175,
    lng: -48.0774443,
  },
}

const slicePosition = createSlice({
  name: 'position',
  initialState: INITIAL_STATE,
  reducers: {
    addPosition: (state, { payload }) => {
      state.position = {
        lat: payload.lat,
        lng: payload.lng,
      }
    },
  },
})

export default slicePosition.reducer

export const { addPosition } = slicePosition.actions

export const usePosition = (state: any) => {
  return state.position as PositionState
}
