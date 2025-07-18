import styles from './Light.module.scss'
import PropTypes from 'prop-types'

const Light = ({ lightsOn }) => {
    return <div className={`${styles.lights} ${lightsOn ? styles.yellow : ''}`}></div>
}

Light.propTypes = {
    lightsOn: PropTypes.bool.isRequired
}

export default Light;