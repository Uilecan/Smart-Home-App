import './App.scss'
import Welcome from './logic/Welcome';
import SmartHome from './logic/SmartHome';
import { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import FeaturesForm from './logic/FeaturesForm';
import NotFound from './logic/NotFound';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

function App() {

  const [feature, setFeature] = useState({
    name: '',
    action: '',
    state: false,
    id: 0
  })

  const updateFeatures = (newFeature) => {
    setFeature(newFeature)
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon />
              <Link to='/welcome'>Welcome page</Link>
            </li>
            <li>
              <DevicesIcon />
              <NavLink to='/smart-home'>Use smart home app</NavLink>
            </li>
            <li>
              <AddToQueueIcon />
              <NavLink to='/features-form'>Create new smart home feature</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className='lights yellow'></div>


      <Routes>
        <Route path='/' element={<SmartHome newFeature={feature} />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>
        <Route path='/smart-home' element={<SmartHome newFeature={feature} />}></Route>
        <Route path='/features-form' element={<FeaturesForm updateFeatures={updateFeatures} />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
