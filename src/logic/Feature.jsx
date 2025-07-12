import './Feature.scss';
import PropTypes from 'prop-types';
import buttonIcon from './assets/images/lights-icon.png';
import buttonIconOff from './assets/images/lightsOff-icon.png';
import { useEffect, useState } from 'react';

export const Feature = ({ name, action, toggleAction, state }) => {

    const [icon, setIcon] = useState('');

    const featureButtonHandler = () => {
        console.log(`Clicked on ${name}`);
        toggleAction(name);
    }
    useEffect(() => {
        state ? setIcon(buttonIcon) : setIcon(buttonIconOff);
    }, [state]);
    return (
        <div className="feature">
            <img src={icon} alt="" className='button-img' />
            <h3>{name}</h3>
            <button onClick={featureButtonHandler}>{action}</button>
        </div>
    )
}
Feature.PropTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    toggleAction: PropTypes.func.isRequired,
    state: PropTypes.bool
}

export default Feature;