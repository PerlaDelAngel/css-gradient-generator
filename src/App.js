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

  useEffect(() => {
    if(values.gradType === 'radial'){
      setValues({
        ...values,
        direction: linearToRadial(values)
      })
    };

    if(values.gradType === 'linear'){
      setValues({
        ...values,
        direction: radialToLinear(values)
      })
    };
  }, [values.gradType])

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
  }

  const styles = { 
    gridArea: 'gradient',
    height: '100vh',
    background: gradientType()
  }  

  return (
    <div className='app'>
      <Sidebar values={values} setValues={setValues}></Sidebar>

      <div style={styles}/>
    </div>
  );
}

export default App;
