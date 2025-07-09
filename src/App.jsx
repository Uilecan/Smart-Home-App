import './App.scss'
import Features from './logic/Features';
import Light from './ui/Light'
import Room from './ui/Room';
import { useState } from 'react';

function App() {


  let [lightState, setLightState] = useState(true);

  const toggleTheAction = (action) => {
    if (action === 'Toggle Lights') {
      setLightState((prevState) => !prevState);
      console.log(`Toggling the action for ${lightState}`);
    }
  }
  return (
    <div>
      <div className='ui-features'>
        <Light lightsOn={lightState}></Light>
        <Room status={0.7}></Room>
      </div>
      <Features toggleAction={toggleTheAction}></Features>
    </div>
  )
}

export default App
