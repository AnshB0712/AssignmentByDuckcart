import { useState } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { addDonationToCreator,getACreator } from '../features/creators/creatorsSlice'
import { addDonationToUserData } from '../features/user/userSlice'
import {CurrencyChange} from './CurrencyChange'

import styled from 'styled-components'
import {ChevronLeft} from 'react-bootstrap-icons'


export const CreatorPopup = ({
  data,
  setActiveCreator
}) => {
  
  const [state,setState]=useState({})
  const [error,setError]=useState(false)
  
  const dispatch = useDispatch()
  const {donations} = useSelector(store => getACreator(store,data.id))
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!error) setError(false)
    
    if(!state.currency.amt)
    return setError(true)
    
    dispatch(addDonationToCreator({
      creatorID: data.id,
      donationInfo: state
    }))
    dispatch(addDonationToUserData({
      donationInfo: {
        creatorID: data.id,
        ...state
      }
    }))
    
    setError(false)
    setState({currency:{cur:'$',amt:0},name:'',message:''})
  }
  const handleChange = (e) => {
    setState(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }
  
  return(
  <PopupWrapper>
  
  <header>
  
  <div className="creator_info">
  
  <ChevronLeft 
  onClick={()=>setActiveCreator(null)}
  size={18} />
  
  <img src={data.profileUrl}/>
  
  <p style={{
    fontWeight: '600',
    fontSize:'1.1rem'
  }}>{data.name}</p>
  
  </div>

  </header>
  
  <p style={{
    textAlign:'center',
    fontSize:'1.25rem',
    fontWeight:'500',
    width: '28ch',
    margin:'1rem auto'
  }}>
  {`Send your love to ${data.name} to become a real fan`}
  </p>
  
  <form 
  id="form"
  onSubmit={e=>handleSubmit(e)}>
  
  <CurrencyChange 
  onChange={e => setState(p => ({
    ...p,
    currency: e
  }))}/>
  {error && <p style={{
    fontSize:'.8rem',
    color:"red"
  }}>Please enter a amount bigger than 0.</p>}
  
  <input 
  onChange={e => handleChange(e)}
  type="text" 
  name="name"
  value={state.name}
  placeholder="Your Name( optional )"/>
  <textarea 
  onChange={e => handleChange(e)}
  name="message"
  value={state.message}
  placeholder="Say Something(optional)"
  />
  
  </form>
  
  <div style={{
    height: '220px',
    overflow: 'auto'
  }}>
  
  {donations.map(data => {
  return(
  <RecentTransaction key={data.id}>
  
  <h2>
  {data.currency.cur}
  {data.currency.amt}
  </h2>
  
  <p>
  {data.message ? data.message : 'No Message'}
  </p>
  
  <p>
  {`By: ${data.name ? data.name:'Anonymous'}`}
  </p>
  
  </RecentTransaction>
  )
  })}
  </div>
  
  <button form="form">
  {!state.currency?.amt ? 'Support':`Support ${state.currency?.cur}${state.currency?.amt}`}
  </button>
  
  </PopupWrapper>
  )
}

const PopupWrapper = styled.div`
     width: 100px;
     height: 100px;
     background: rgb(255,255,255);
     
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     
     & header{
      display: flex;
      justify-content: center;
      align-items: center;
      
      padding: 1.25rem;
      border: 1px solid #dbdbd8;
      
      & .creator_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin-right: auto;
        
        width: 45%;
        
        & img{
          height: 35px;
          width: 35px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
     }
     
     & button{
        border: none;
        border-radius: 60px;
        
        padding: 1rem 5rem;
        background: #6a3fde;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 600;
        
        display: block;
        margin: 1rem auto;
       }
       
     & form{
       padding: 2rem;
       
       & input,textarea{
         padding: .75rem 1.25rem;
         border: 2px solid #bababa;
         border-radius: 5px;
         display: block;
         width: 100%;
         margin: 1rem auto;
       }
       

       
     }
`

export const RecentTransaction = styled.div`
     width: 90%;
     max-width: 650px;
     
     border: 1px solid #dbdbd8;
     border-radius: 5px;
     
     padding: 1rem 1.5rem;
     margin: 1rem auto;
     
     display: flex;
     justify-content: space-between;
     align-items: center;
     
     & p{
       font-weight: 500;
       text-align: center;
       color: #1b1b1b;
     }
`