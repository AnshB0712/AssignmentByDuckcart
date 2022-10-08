import { Header } from './Header'
import { RecentTransaction } from './CreatorPopup'
import { useSelector } from 'react-redux'
import { getAllDonationsByUser } from '../features/user/userSlice'

export const AllDonations = () => {
  
  const donations = useSelector(getAllDonationsByUser)
  
  return(
  <>
  <Header />
  <h3 style={{
    textAlign:'center',
    fontSize: '2rem',
    margin: '1rem 0'
  }}
  >All Donations</h3>
  {donations.map(data => {
  return(
  <RecentTransaction key={data.id}>
  
  <h2>
  {data.currency.cur}
  {data.currency.amt}
  </h2>
  
  <p>
  {`To: ${data.creatorID}`}
  </p>
  
  <p>
  {data.message ? data.message : 'No Message'}
  </p>
  
  <p>
  {`By: ${data.name ? data.name:'Anonymous'}`}
  </p>
  
  </RecentTransaction>
  )
  })}
  </>
  )
  
}