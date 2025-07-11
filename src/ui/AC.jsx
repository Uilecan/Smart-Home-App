import './AC.scss'
import PropTypes from 'prop-types'

const AC = ({ acOn }) => {
    return <div className={`ac ${acOn ? 'blue' : ''}`}></div>
}

AC.propTypes = {
    acOn: PropTypes.bool.isRequired
}

export default AC;