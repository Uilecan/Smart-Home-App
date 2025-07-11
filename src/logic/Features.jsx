import Feature from "./Feature";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Features = ({ toggleAction, newFeature }) => {
    const FEATURES = [
        {
            name: 'Toggle Lights',
            action: 'Turn the lights on',
            state: false,
            id: 0
        },
        {
            name: 'Toggle AC',
            action: 'Turn the AC on',
            state: false,
            id: 1
        },
        {
            name: 'Clean',
            action: 'Start the cleaning robot',
            state: false,
            id: 2
        },
        {
            name: 'Coffee Time',
            action: 'Start the coffee machine',
            state: false,
            id: 3
        }

    ]



    const [features, setFeatures] = useState(FEATURES);

    useEffect(() => {
        console.log(newFeature);
        if (newFeature && newFeature.name !== '') {
            setFeatures(prevState => {
                return [newFeature, ...prevState]
            })
        }
    }, [newFeature])

    const toggleTheAction = (value) => {
        toggleAction(value);
    }





    return (
        <div className="container">
            <div className="features">
                {
                    features.map(feature => (
                        <Feature key={feature.id}
                            name={feature.name}
                            action={feature.action}
                            toggleAction={toggleTheAction} />
                    ))
                }
            </div>

        </div>
    )
}

Features.propTypes = {
    toggleAction: PropTypes.func.isRequired,
    newFeature: PropTypes.object
}


export default Features;