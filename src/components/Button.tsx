import React from 'react';
import './Button.css'; // Import external CSS

// @ts-ignore
const PricingButton = ({label, click}) => {
  

  return (
    <button
    type="button"
    className="cursor-pointer inline-block items-center outline-none overflow-x-hidden btn-primary btn-sm caption-xs-bold px-3 py-2 inline-flex rounded-full mr-2"
    onClick={click}
  >
    <div className="btn-content flex items-center align-middle transition-transform duration-300">
      <span className="btn-label transition-spacing flex duration-300 ease-in-out">
        {label}
      </span>
    </div>
  </button>
  );
};

export default PricingButton;