import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import { testReducer } from './slices'

export const store = configureStore({
  reducer: {
    test: testReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
