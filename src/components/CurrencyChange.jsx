import { useState,useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { ChevronDown } from 'react-bootstrap-icons'

export const CurrencyChange = ({
  onChange
}) => {
  
  const [value,setValue] = useState({
    cur: '$',
    amt: 0
  })
  
  useEffect(()=>{
  onChange(value)
  },[value])
  
  return (
  <Wrapper>
  <SelectorCurrency 
  value={value}
  setValue={setValue}
  />
  <input 
  onChange={
  (e) => {
  setValue(p => ({...p,amt:+e.target.value}))
  }} 
  type="number" placeholder="Amount"/>
  </Wrapper>
  )
}

const SelectorCurrency = ({value,setValue}) => {
  
  const [show,setShow] = useState(false)
  
  return (
  <CurrencyWrapper>
  
  <p style={{
    fontSize: '1.35rem',
    fontWeight: '500'
  }}>{value.cur}</p>
  
  <ChevronDown 
  style={{
  transition: 'all .25s',
  transform: `rotate(${show ? '-180deg':'0deg'})`
  }}
  onClick={() => setShow(!show)}
  size={12}/>
  
 { show && <CurrencyDropdown>
  
  { ["$","€","£","¥","¢"].map(data => (<DropdownItem onClick={() =>{ setValue(p => ({...p,cur:data}))
    setShow(false)
  }} key={data}>{data}</DropdownItem>))}
  
  </CurrencyDropdown> }
  
  </CurrencyWrapper>
  )
}

const DropdownItem = styled.p`

     border: 1px solid #dbdbd8;
     border-radius: 6px;
     
     font-size: 1.25rem;
     font-weight: 600;
     
     padding: 1rem;
     
     text-align: center;
     margin: .5rem 0;
`

const CurrencyDropdown = styled.div`
     position: absolute;
     top: 115%;
     border-radius: 5px;
     height: 220px;
     background: #fff;
     border: 1px solid #dbdbd8;
     padding: .5rem;
     min-width: 115%;
     overflow: auto;
`

const CurrencyWrapper = styled.div`
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     
     padding: .6rem 0;
     
     border: 2px solid #bababa;
     border-radius: 6px;
     
     position: relative;
    
`

const Wrapper = styled.div`
     display: grid;
     grid-template-columns: 1fr 5fr;
     align-items: center;
     gap: 6px;
     
     & input{
       padding: .75rem 1.25rem;
       border: 2px solid #bababa;
       border-radius: 5px;
       display: block;
       width: 100%;
     }
`