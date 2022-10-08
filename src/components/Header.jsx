import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = () => {
  return(
  <HeaderStyle>
  
  <Link to="/">
  <h2>DuckCart Task</h2>
  </Link>
  
  <Link to="/alldonations">
  View All Donations
  </Link>
  
  </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     
     background: #6a3fde;
     padding: 1rem 2rem;
     
     & h2{
       color: #fff;
     }
     & a:first-child{
       color: #fff;
       text-decoration: none;
     }
     & a{
       color: #fff;
     }
`