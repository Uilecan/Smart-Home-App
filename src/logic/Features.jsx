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


    const toggleLights = () => {
        setFeatures(prevState => {
            const updatedFeatures = prevState.map(feature => {
                if (feature.name === 'Toggle Lights') {
                    return {
                        ...feature,
                        state: !feature.state,
                        action: `Turn the lights ${!feature.state ? 'off' : 'on'}`
                    }

                }
                return feature;
            })
            return updatedFeatures;
        })
    }

    const toggleAC = () => {
        setFeatures(prevState => {
            const updatedFeatures = prevState.map(feature => {
                if (feature.name === 'Toggle AC') {
                    return {
                        ...feature,
                        state: !feature.state,
                        action: `Turn the AC ${!feature.state ? 'off' : 'on'}`
                    }
                }
                return feature;
            })
            return updatedFeatures;
        })

    }

    const toggleTheAction = (value) => {
        toggleAction(value);

        switch (value) {
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
        <div className="container">
            <div className="features">
                {
                    features.map(feature => (
                        <Feature key={feature.id}
                            name={feature.name}
                            action={feature.action}
                            state={feature.state}
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