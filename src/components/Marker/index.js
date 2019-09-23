import React from 'react';
import PropTypes from 'prop-types';

import MarkerStyled from './MarkerStyled';
import MarkerInGroupStyled from './MarkerInGroupStyled';
//import Spy from '../Spy';
import vehiclelogo from './truck.png';

class Marker extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    inGroup: false,
  };

  render() {
    return (
      
        <img src={vehiclelogo}/>
      
     
    );
  }
}

Marker.propTypes = {
  inGroup: PropTypes.bool,
};

export default Marker;
