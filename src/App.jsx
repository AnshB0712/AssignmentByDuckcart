import { useState } from 'react'

import { Card } from './components/Card'
import { Header } from './components/Header'

import { CreatorPopup } from './components/CreatorPopup'

import { getAllCreators } from './features/creators/creatorsSlice'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

function App() {
  
  const [activeCreator,setActiveCreator] = useState(null)
  
  const creatorsData = useSelector(getAllCreators)
  
  return (
  <main style={{position:'relative'}}>
  <Header />
  
  <p style={{
    padding: '0rem 1.5rem',
    marginTop: '1.5rem',
    fontSize: '1.25rem',
    fontWeight: '600'
  }}>
  Recommended Creators
  </p>
  
  <Grid>
  {creatorsData.map(data => (
  <Card 
  key={data.id} 
  data={data}
  onClick={()=>setActiveCreator(data)}
  />
  ))}
  </Grid>
  
  {activeCreator && <CreatorPopup 
  setActiveCreator={setActiveCreator}
  data={activeCreator}/>}
  </main>
  )
}

const Grid = styled.section`
     display: grid;
     grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
     gap: .5rem;
     
     padding: 1rem;
`

export default App
