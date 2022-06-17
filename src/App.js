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

  useEffect(() => {
    console.log(values)
  }, [values])
  

  return (
    <div className="App">
      <Sidebar values={values} setValues={setValues}/>
    </div>
  );
}

export default App;
