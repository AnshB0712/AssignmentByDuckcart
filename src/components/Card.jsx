import styled from 'styled-components'

export const Card = ({data,onClick}) => {
  return (
  <CardWrapper onClick={onClick}>
  <img src={data.profileUrl}/>
  <div style={{marginRight:'auto'}}>
  <h3>{data.name}</h3>
  <p>{data.profession}</p>
  </div>
  </CardWrapper>
  )
}

const CardWrapper = styled.figure`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     overflow: hidden;
     transition: all .5s;
    
     border-radius: 1rem;
     padding: .75rem;
     
     
     width: 100%;
     max-width: 650px;
     
     & > div{
      margin-top: .5rem;
      padding: .5rem;
     }
     
     & img{
      width: 100%;
      object-fit: contain;
      border-radius: inherit;
     }
     
     & h3{
      font-size: 1.25rem;
     }
     & p{
      color: grey;
      font-weight: 500;
     }
     
     &:hover{
       box-shadow: 0 0 0 3px #6a3fde;
     }
`