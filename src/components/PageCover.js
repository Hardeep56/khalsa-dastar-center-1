import React from 'react';
import './CSS/PageCover.css';

function PageCover({ title, children }) {
  return (
    <div className="page-cover">
      <div className="page-cover-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default PageCover;