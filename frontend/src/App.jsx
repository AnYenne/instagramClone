
// 1. Import thư viện từ bên thứ ba.
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
// 2. Import các module liên quan đến React.
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import Footer from './components/Footer'
import LoginForm from './components/UI/LoginForm'
import MobileDevice from './components/UI/MobileDevice'
import Profile2 from './components/ProfilesCopy'

import HomePage from './pages/HomePage'
import ProfilesPage from './pages/ProfilesPage'
import { GuestPage, Story } from './pages'
import SigninPage from './pages/SigninPage'
import SignUpPage from './pages/SignUpPage'
// 6. Import các style.
import './App.css'
import CreatePost from './components/UI/CreatePost'


function App() {
  const [login, setLogin] = useState(true)

  return (
    <div className='container darkTheme'>
    {!login ? ( <SigninPage />) :( 

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/story' element={<Story />} />
      <Route path='/pf' element={<ProfilesPage />} />
      <Route path='/pf2' element={<Profile2 />} />
      <Route path='/create/post' element={<CreatePost />} />
      <Route path='/accounts/emailsignup' element={<SignUpPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/signin' element={<SigninPage />} />
      {/* <Route path="/message" element={<Message />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Thread />} />
      <Route path="/setting" element={<Setting />} /> */}
    </Routes>
    )
}
    
    </div>
  )
}

export default App
