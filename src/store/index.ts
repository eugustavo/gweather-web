import { configureStore } from '@reduxjs/toolkit'

import slicePosition from './slices/position'
import sliceLocation from './slices/location'

const store = configureStore({
  reducer: {
    position: slicePosition,
    location: sliceLocation,
  },
})

export default store
