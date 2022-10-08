import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState:[],
  reducers:{
    addDonationToUserData(state,action)
    {
      const {donationInfo} = action.payload
      state.push(donationInfo)
    }
  }
})

export const getAllDonationsByUser = store => store.user
export const {addDonationToUserData} = userSlice.actions

export default userSlice.reducer