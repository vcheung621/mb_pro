// React component displaying an image.


import React from 'react';
import PropTypes from 'prop-types';

// Prop types
const Test = ({ image }) => (
    <div>
        <img src={image} alt="test" />
    </div>
);
