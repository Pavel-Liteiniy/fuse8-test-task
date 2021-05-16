import React from 'react';

import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__rings">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
