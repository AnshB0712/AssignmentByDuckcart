import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '48e41',
    name: 'Taylor Swift',
    profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EdKt-Mr_ucAbiGp34_MTZMVpuh7-0SkEGAGpSh_qNifikbvaXxczPFQ&s=10',
    profession: 'Singer/Songwriter',
    donations: []
  },
  {
    id: 'bd744',
    name: 'Jennifer Lawrence',
    profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfClPYDnARy2AJQtbWeWLu17hz6u-3ov45A&usqp=CAU',
    profession: 'Actor/Director',
    donations: []
  },
  {
    id: '5c322',
    name: 'Gigi Hadid',
    profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIA-iU4EP4eQ8Gch-SIL6YDb0H3iWeMQspOZkpEOdYPVgyts_A9maaOL0&s=10',
    profession: 'Model',
    donations: []
  },
  {
    id: '31426',
    name: 'Saiorse Ronan',
    profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXz51xeMx-cIdapePMmPPm5QCoSFXXr3AjKA&usqp=CAU',
    profession: 'Actor',
    donations: []
  },
  {
    id: '4bd08',
    name: 'Blake Lively',
    profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrEc7eMfuIwx5BJlIXoGCfZ6D5HSsaa_wjx_XHE5wXVQhnbZDGqsL9dEW&s=10',
    profession: 'Actor/Model',
    donations: []
  },
  ]

export const creatorsSlice = createSlice({
  name: 'creators',
  initialState,
  reducers: {
    addDonationToCreator(state,action){
      const {donationInfo,creatorID} = action.payload
      const targetCreator = state.find(c => c.id===creatorID)
      targetCreator.donations.push({
        id: nanoid(),...donationInfo
      })
    }
  }
})

export const getAllCreators = store => store.creators
export const getACreator = (store,id) => store.creators.find(c => c.id === id)
export const {addDonationToCreator} = creatorsSlice.actions

export default creatorsSlice.reducer