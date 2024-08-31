import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FiltersState {
  [key: string]: string
  name: string
  username: string
  email: string
  phone: string
}

const initialState: FiltersState = {
  name: '',
  username: '',
  email: '',
  phone: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(
      state,
      action: PayloadAction<{ field: keyof FiltersState; value: string }>,
    ) {
      const { field, value } = action.payload
      state[field] = value
    },
  },
})

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
