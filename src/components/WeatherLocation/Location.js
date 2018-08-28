import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// Detructure extremo v //
const Location = ({city}) => (
    // Sin destructuring
    // const city = props.city;
    
    // Con destructuring
    //const { city } = props;
    <div className="LocationCont" >
        <h1>
            {city}
        </h1>
    </div>
);

Location.proptypes = {
    city: PropTypes.string.isRequired,
}

export default Location;