import * as React from 'react';

const Loading = () => {
  return (
    <div className="site-loader">
      {/*<div className="loader-box">
        <div className="loader-img"><i className="melo-icon melo-icon-truck" /></div>
      </div>*/}
      <div className="loader-box-bg">
        <svg className="c-svg" width="120px" height="120px">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeDasharray="20,20,20">
            <path
              d="M61,120 C94.137085,120 121,93.137085 121,60 C121,26.862915 94.137085,0 61,0 C27.862915,0 1,26.862915 1,60 C1,93.137085 27.862915,120 61,120 Z"
              id="Oval"
              stroke="#fff"
            />
          </g>
        </svg>
        <div className="loader-rotate-img">
          <i className="melo-icon melo-icon-truck1" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
