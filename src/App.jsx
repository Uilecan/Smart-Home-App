import './App.scss'
import Features from './logic/Features';
import Light from './ui/Light'
import Room from './ui/Room';
import AC from './ui/AC';
import FeaturesForm from './logic/FeaturesForm';
import { use, useEffect, useState, useRef } from 'react';

function App() {


  const [lightState, setLightState] = useState(false);
  const [acState, setAcState] = useState(false);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0
  });

  const [feature, setFeature] = useState({
    name: '',
    action: '',
    state: false,
    id: 0
  })

  let dirtInterval = useRef();
  useEffect(() => {
    dirtInterval.current = setInterval(() => {
      setDirtProgress(prevState => {
        if (prevState.status > 1) {
          clearInterval(dirtInterval.current)
        }
        return {
          ...prevState,
          status: prevState.status + 0.1
        }
      })
    }, 2000)
    return () => {
      clearInterval(dirtInterval.current);
    }
  }, [dirtProgress.cleaned]);

  const toggleLights = () => {
    setLightState((prevState) => !prevState);
  }

  const toggleAC = () => {
    setAcState((prevState) => !prevState);
  }

  const startCleaning = () => {
    setDirtProgress(prevState => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1
      }

    })
  }

  const toggleActionHandler = (name) => {
    switch (name) {
      case 'Toggle Lights':
        toggleLights();
        break;
      case 'Toggle AC':
        toggleAC();
        break;
      case 'Clean':
        startCleaning();
        break;
    }
  }

  const updateFeatures = (newFeature) => {
    setFeature(newFeature)
  }

  return (
    <div>
      <div className='ui-features'>
        <Light lightsOn={lightState}></Light>
        <Room status={dirtProgress.status}></Room>
        <AC acOn={acState}></AC>
      </div>
      <Features toggleAction={toggleActionHandler} newFeature={feature}></Features>
      <FeaturesForm updateFeatures={updateFeatures}></FeaturesForm>
    </div>
  )
}

export default App
