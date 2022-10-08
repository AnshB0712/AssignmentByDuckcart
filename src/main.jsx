import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import App from './App'
import {AllDonations} from './components/AllDonations'
import './index.css'

import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/alldonations' 
    element={<AllDonations/>}/>
  </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
)
