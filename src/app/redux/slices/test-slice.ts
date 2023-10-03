import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const testSlice = createSlice({
  name: 'test',
  initialState: { example: 'test' },
  reducers: {
    testAction: (state, action: PayloadAction<string>) => {
      state.example = action.payload
    }
  }
})

export const testReducer = testSlice.reducer
export const { testAction } = testSlice.actions
