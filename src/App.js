import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

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

  const gradientType = `${values.gradType}-gradient(${values.direction},${values.firstColor}, ${values.secondColor})`
  const styles = { 
    gridArea: 'gradient',
    height: '100vh',
    background: gradientType
  }  

  return (
    <div className='app'>
      <Sidebar values={values} setValues={setValues}/>

      <div style={styles}/>
    </div>
  );
}

export default App;
