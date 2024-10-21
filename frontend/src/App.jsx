
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import LoginForm from './components/UI/LoginForm'
import MobileDevice from './components/UI/MobileDevice'
import HomePage from './pages/HomePage'
import ProfilesPage from './pages/ProfilesPage'

import { GuestPage, Story } from './pages'
import Profile2 from './components/ProfilesCopy'
function App() {
  const [login, setLogin] = useState(true)

  return (
    <div className='container darkTheme'>
    {!login ? ( <div className='container'>
    <div >
      <MobileDevice />
      <LoginForm />
    </div>
    <Footer/>
    </div>  
  ) :

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/story' element={<Story />} />
      <Route path='/pf' element={<ProfilesPage />} />
      <Route path='/pf2' element={<Profile2 />} />
      {/* <Route path="/message" element={<Message />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Thread />} />
      <Route path="/setting" element={<Setting />} /> */}
    </Routes>
}
    
    </div>
  )
}

export default App
