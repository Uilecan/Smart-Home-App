import './Light.scss'
import PropTypes from 'prop-types'

const Light = ({ lightsOn }) => {
    return <div className={`lights ${lightsOn ? 'yellow' : ''}`}></div>
}

Light.propTypes = {
    lightsOn: PropTypes.bool.isRequired
}

export default Light;