import Feature from "./Feature";
import FeaturesForm from "./FeaturesForm";
import React, { useState } from "react";
import PropTypes from 'prop-types';

const Features = ({ toggleAction }) => {
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

    const toggleTheAction = (value) => {
        toggleAction(value);
    }

    const updateFeatures = (newFeature) => {
        setFeatures((prevFeatures) => {
            return [...prevFeatures, newFeature];
        });
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
            <FeaturesForm updateFeatures={updateFeatures} currentItems={features.length}></FeaturesForm>
        </div>
    )
}

Features.PropTypes = {
    toggleAction: PropTypes.func.isRequired
}


export default Features;