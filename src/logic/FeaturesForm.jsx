import { useState } from 'react';
import Features from './Features';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
//Material UI
import TextField from '@mui/material/TextField';

const FeaturesForm = ({ updateFeatures }) => {
    const [isFormValid, setIsFormValid] = useState(true);

    const [nameField, setNameField] = useState('');
    const [actionField, setActionField] = useState('');
    const [stateField, setStateField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');
    const [nameFieldError, setNameFieldError] = useState(false);

    const navigate = useNavigate();



    const checkValid = () => {
        if (nameField === '' ||
            actionField === '' ||
            stateField === '' ||
            descriptionField === '') {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }

        if (nameField === '') {
            setNameFieldError(true);
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
        checkValid(); // Verificam daca formularul este valid
        if (isFormValid) {
            return; // Nu trimitem formularul daca nu este valid
        }
        const newFeature = {
            name: nameField,
            action: actionField,
            state: stateField,
            id: Math.random() * 100
        }
        updateFeatures(newFeature)
        resetFields();
        navigate('/smart-home'); // Navigam catre SmartHome dupa adaugarea feature-ului
    }

    return (
        <form className={`form ${isFormValid ? 'valid' : 'invalid'} `}
            onSubmit={submitHandler}
            noValidate>
            <div className="control">
                <TextField
                    error={nameFieldError}
                    id="name-field-error-text"
                    label="Feature Title"
                    value={nameField}
                    required
                    onChange={nameChangeHandler}
                    helperText="Incorrect name"
                    variant="standard"
                />
            </div>

            <div className="control">
                <label htmlFor="action">Feature action</label>
                <input type="text"
                    id="action"
                    required
                    onChange={actionChangeHandler}
                    value={actionField} />
            </div>

            <div className="control">
                <label htmlFor="state">Feature state</label>
                <input type="text"
                    id="state"
                    required
                    onChange={(e) => setStateField(e.target.value)}
                    value={stateField} />
            </div>

            <div className="control">
                <label htmlFor="description">Feature description</label>
                <textarea id="description" rows={5}
                    required
                    value={descriptionField}
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