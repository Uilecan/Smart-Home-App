import { useState } from 'react';
import Features from './Features';
import PropTypes from 'prop-types';

const FeaturesForm = ({ updateFeatures }) => {
    const [isFormValid, setIsFormValid] = useState(true);

    const [nameField, setNameField] = useState('');
    const [actionField, setActionField] = useState('');
    const [stateField, setStateField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');


    const checkValid = () => {
        if (nameField === '' ||
            actionField === '' ||
            stateField === '' ||
            descriptionField === '') {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    }


    /**Reset the fields after the value are used */
    const resetFields = () => {
        setNameField('');
        setActionField('');
        setStateField('');
        setDescriptionField('');

    }

    const nameChangeHandler = (e) => {
        setNameField(e.target.value);
    }

    const actionChangeHandler = (e) => {
        setActionField(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); //Nu se face refresh la submit
        checkValid();


        const newFeature = {
            name: nameField,
            action: actionField,
            state: stateField,
            id: Math.random() * 100
        }
        updateFeatures(newFeature)
        resetFields();
    }

    return (
        <form className={`form ${isFormValid ? 'valid' : 'invalid'} `}
            onSubmit={submitHandler}
            noValidate>
            <div className="control">
                <label htmlFor="title">Feature title</label>
                <input type="text" id="title" required onChange={nameChangeHandler} />
            </div>

            <div className="control">
                <label htmlFor="action">Feature action</label>
                <input type="text" id="action" required onChange={actionChangeHandler} />
            </div>

            <div className="control">
                <label htmlFor="state">Feature state</label>
                <input type="text" id="state" required
                    onChange={() => setStateField(e.target.value)} />
            </div>

            <div className="control">
                <label htmlFor="description">Feature description</label>
                <textarea id="description" rows={5} required
                    onChange={(e) => setDescriptionField(e.target.value)}></textarea>
            </div>

            <div className="actions">
                <button type="submit">Add Feature</button>
            </div>
        </form>
    )
}

FeaturesForm.propTypes = {
    updateFeatures: PropTypes.func,
    currentItems: PropTypes.number
}

export default FeaturesForm; 