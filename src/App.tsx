import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className='page flex'>
      <div className="container flex">
        <div className="side-bar">
          <div className='side-bar-step'>
            Step 1
            Your info
          </div>
          <div className='side-bar-step'>
            Step 2
            Select plan
          </div>  
          <div className='side-bar-step'>
            Step 3
            Add-ons
          </div> 
          <div className='side-bar-step'>
            Step 4
            Summary
          </div>
        </div>
        <div className="form">
          <div className="form-title">
            <span className='title'> Personal info </span>
            Please provide your name, email address, and phone number.
          </div>
          <div className="form-step-1">

          </div>
          <div className="form-footer">
            <Button> Next Step</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
