import { useState, useEffect } from 'react';

import { gradientType, linearToRadial, radialToLinear } from './utils/gradientType';
import { randomColor, RGBToHex } from './utils/colors';

import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Gradients from './components/Gradients/Gradients';

function App() {
  let initialValues = {};

  if (window.location.href.includes('?')) { //Sets initial values with search params
    const link = new URLSearchParams(window.location.search);
    const entries = link.entries();
    for (const [key, value] of entries) {
      initialValues[key] = value;
    }; 
  } else { //Sets initial values with default values
    initialValues = {
      gradType: 'linear',
      direction: 'to bottom right',
      firstColor: randomColor(),
      secondColor: randomColor()
    };
  };

  const colorOne = initialValues.firstColor;
  const colorTwo = initialValues.secondColor;
  if(colorOne.includes('rgb')){ //If it receives the colors in rgb, converts it to HEX to render them
    initialValues.firstColor = RGBToHex(colorOne);
    initialValues.secondColor = RGBToHex(colorTwo);
  };

  const [values, setValues] = useState(initialValues);

  const [update, setUpdate] = useState(0); //State to handle when a new gradient is saved

  const handleUpdate = () => {
    setUpdate(update + 1)
  };

  const handleUpdateDir = (data) => {
    setValues(prevValues => ({
      ...prevValues,
      direction: data
    }))
  };

  useEffect(() => { //Changes the direction based on the gradient type
    if (values.gradType === 'radial') {
      handleUpdateDir(linearToRadial(values.direction));
    } else if (values.gradType === 'linear') {
      handleUpdateDir(radialToLinear(values.direction));
    };
  }, [values.gradType, values.direction]);

  const gradientCode = gradientType(values);

  const styles = {
    height: '100vh',
    background: gradientCode
  };

  return (
    <div className='app'>
      <Sidebar
        values={values}
        setValues={setValues}
        gradientCode={gradientCode}
        handleUpdate={handleUpdate} />

      <section className='gradient'>
        <div style={styles}>
          <p className='scroll'>↓ Scroll for more ↓</p>
        </div>
        <Gradients className="gradients" update={update} />
      </section>

    </div>
  );
}

export default App;
