import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { linearToRadial, radialToLinear } from './utils/changeDirection';

function App() {
  const [values, setValues] = useState({
    gradType: 'linear',
    direction: 'to bottom right',
    firstColor: '',
    secondColor: ''
  });

  /* useEffect(() => {
    console.log(values)
  }, [values]) */
  

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

  let gradientCode = '';
  const gradientType = () => {
    if(values.gradType === 'linear'){ 
      gradientCode = `${values.gradType}-gradient(${values.direction}, ${values.firstColor}, ${values.secondColor})`;
      return gradientCode;
    } else if (values.gradType === 'radial' && values.direction === 'ellipse at center'){
      gradientCode = `${values.gradType}-gradient(${values.direction}, ${values.firstColor}, ${values.secondColor})`;
      return gradientCode;
    } else {
      gradientCode = `${values.gradType}-gradient(circle at ${values.direction}, ${values.firstColor}, ${values.secondColor})`;
      return gradientCode;
    }
  };

  const styles = { 
    gridArea: 'gradient',
    height: '100vh',
    background: gradientType()
  };

  return (
    <div className='app'>
      <Sidebar values={values} setValues={setValues} gradientCode={gradientCode}/>

      <div style={styles}/>
    </div>
  );
}

export default App;
