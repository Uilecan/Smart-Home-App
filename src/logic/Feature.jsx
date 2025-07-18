//React
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//App
import './Feature.scss';
import buttonIcon from './assets/images/lights-icon.png';
import buttonIconOff from './assets/images/lightsOff-icon.png';
import smartHomeIcon from './assets/images/smart-home.jpg';

//Material UI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

export const Feature = ({ name, action, toggleAction, state }) => {

    const [icon, setIcon] = useState('');

    const featureButtonHandler = () => {
        console.log(`Clicked on ${name}`);
        toggleAction(name);
    }
    useEffect(() => {
        if (name === 'Toggle Lights') {
            state ? setIcon(buttonIcon) : setIcon(buttonIconOff);
        }
        else {
            setIcon(smartHomeIcon);
        }
    }, [state]);

    return (
        <div className="feature">
            <Card sx={{ maxWidth: 345 }} onClick={featureButtonHandler}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={icon}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Description to be added here
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
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