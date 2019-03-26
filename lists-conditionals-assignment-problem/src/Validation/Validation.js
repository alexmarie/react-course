import React from 'react';

const validation = (props) => {

    const displayText = props.charCount > 5 ? 
                            "Text long enough" :
                            "Text too short!"

    return (
        <div>
            <p>{displayText}</p>
        </div>
    )
};

export default validation;