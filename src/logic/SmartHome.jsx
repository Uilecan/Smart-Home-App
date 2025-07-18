import { useEffect, useRef, useState } from "react";
import AC from "../ui/AC";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Features from "./Features";
import PropType from "prop-types";

const SmartHome = ({ newFeature }) => {


    const [lightState, setLightState] = useState(false);
    const [acState, setAcState] = useState(false);
    const [dirtProgress, setDirtProgress] = useState({
        status: 0,
        cleaned: 0
    });



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
    return (
        <>
            <div className='ui-features'>
                <Light lightsOn={lightState}></Light>
                <Room status={dirtProgress.status}></Room>
                <AC acOn={acState}></AC>
            </div>
            <Features toggleAction={toggleActionHandler} newFeature={newFeature}></Features>

        </>
    )
}

SmartHome.propType = {
    newFeature: PropType.object
}

export default SmartHome;