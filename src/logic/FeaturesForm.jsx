import React, { useRef, useState } from 'react';
import Features from './Features';
import PropTypes from 'prop-types';

const FeaturesForm = ({ updateFeatures }) => {
    const [isFormValid, setIsFormValid] = useState(true);

    const titleInputRef = useRef();
    const actionInputRef = useRef();
    const stateInputRef = useRef();
    const descriptionInputRef = useRef();

    const checkValid = () => {
        if (titleInputRef.current.value === '' ||
            actionInputRef.current.value === '' ||
            stateInputRef.current.value === '' ||
            descriptionInputRef.current.value === '') {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    }


    /**Reset the fields after the value are used */
    const resetFields = () => {
        titleInputRef.current.value = '';
        actionInputRef.current.value = '';
        stateInputRef.current.value = '';
        descriptionInputRef.current.value = '';

    }

    const submitHandler = (event) => {
        event.preventDefault(); //Nu se face refresh la submit
        checkValid();

        const titleValue = titleInputRef.current.value;
        const actionValue = actionInputRef.current.value;
        const stateValue = stateInputRef.current.value;
        const descriptionValue = descriptionInputRef.current.value;

        const newFeature = {
            name: titleValue,
            action: actionValue,
            state: stateValue,
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
                <input type="text" id="title" required ref={titleInputRef} />
            </div>

            <div className="control">
                <label htmlFor="action">Feature action</label>
                <input type="text" id="action" required ref={actionInputRef} />
            </div>

            <div className="control">
                <label htmlFor="state">Feature state</label>
                <input type="text" id="state" required ref={stateInputRef} />
            </div>

            <div className="control">
                <label htmlFor="description">Feature description</label>
                <textarea id="description" rows={5} required ref={descriptionInputRef}></textarea>
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