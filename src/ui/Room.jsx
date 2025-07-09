import './Room.scss'
import PropTypes from 'prop-types';

const Room = ({status}) =>{
    return (
        <div className='room' style={{opacity:status}}></div>
    )
}

Room.propTypes = {
    status: PropTypes.number.isRequired
}
export default Room;