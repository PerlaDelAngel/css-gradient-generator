import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { linearToRadial, radialToLinear } from './utils/changeDirection';
import { gradientType } from './utils/gradientType';
import Gradients from './components/Gradients/Gradients';

function App() {
  const [values, setValues] = useState({
    gradType: 'linear',
    direction: 'to bottom right',
    firstColor: '',
    secondColor: ''
  });

  const [update, setUpdate] = useState(0);

  const handleUpdate = () => {
    setUpdate(update +1)
  };

  const handleUpdateDir  = (data) => {
      setValues(prevValues => ({
        ...prevValues,
        direction: data
      }))
  };

  useEffect(() => {
    if(values.gradType === 'radial'){
      const radialV = linearToRadial(values.direction);
      handleUpdateDir(radialV);
    };

    if(values.gradType === 'linear'){
      const linearV = radialToLinear(values.direction);
      handleUpdateDir(linearV);
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
        <Gradients className="gradients" update={update}/>
      </section>
      
    </div>
  );
}

export default App;
