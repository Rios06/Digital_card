// Main component of the application that includes all other components
import React, { useState } from 'react';
import Info from './components/info';
import About from './components/about';
import Interest from './components/interest';
import Footer from './components/footer';
import './App.css';
import ReactSwitch from 'react-switch';

function App() {
  // State to manage the theme switch
  const [checked, setChecked] = useState(true);

   // Handler function for theme switch
  const handleSwitch = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className={`App ${checked ? 'dark-theme' : ''}`}>
      {/* Theme switch */}
      <ReactSwitch
        onChange={handleSwitch}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
      {/* Main content container */}
      <div className='page-container'>
        {/* Card container with components */}
        <div className={`card-container ${checked ? 'dark-mode' : ''}`}>
          <header className='App-header' id={checked ? 'dark' : 'light'}>
            {/* Rendering individual components */}
            <Info />
            <About />
            <Interest />
            <Footer />
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
