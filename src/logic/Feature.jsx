import './Feature.scss';
import PropTypes from 'prop-types';

export const Feature = ({ name, action, toggleAction }) => {

    const featureButtonHandler = () => {
        console.log(`Clicked on ${name}`);
        toggleAction(name);
    }

    return (
        <div className="feature">
            <h3>{name}</h3>
            <button onClick={featureButtonHandler}>{action}</button>
        </div>
    )
}
Feature.PropTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    toggleAction: PropTypes.func.isRequired
}

export default Feature;