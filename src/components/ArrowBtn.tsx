import React from 'react';
import './ArrowBtn.css'; // Import external CSS

//@ts-ignore
const ArrowBtn = ({ label, click }) => {
  return (
    <button className="arrow-btn" onClick={click}>
      <div className="btn-content">
        {/* <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="left-arrow"
        >
          <path d="M5.48038 10.3679L4.45623 9.35369L7.5237 6.28622H0.0712891V4.80469H7.5237L4.45623 1.74219L5.48038 0.723011L10.3028 5.54545L5.48038 10.3679Z" />
        </svg> */}
        <span className="btn-label">{label}</span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
        >
          <path d="M5.48038 10.3679L4.45623 9.35369L7.5237 6.28622H0.0712891V4.80469H7.5237L4.45623 1.74219L5.48038 0.723011L10.3028 5.54545L5.48038 10.3679Z" />
        </svg>
      </div>
    </button>
  );
};

export default ArrowBtn;