import './App.css';
import { useState/* , useEffect  */} from 'react';
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

  let gradientCode = ''

  const gradientType = () => {
    if(values.gradType === 'linear'){ 
      gradientCode = `${values.gradType}-gradient(${values.direction},${values.firstColor}, ${values.secondColor})`;
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
