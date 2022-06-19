import styles from './Sidebar.module.css';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import Direction from '../Direction/Direction';
import Footer from '../Footer/Footer';
import { randomColor, hexToRGB } from '../../utils/colors';
import GetButton from '../GetButton/GetButton';
import { apiEndpoint } from '../../utils/api';

export default function Sidebar({values, setValues, gradientCode, handleUpdate}) {
  const [type, setType] = useState('linear'); 
  const [color1, setColor1] = useState(''); 
  const [color2, setColor2] = useState('');
  const [save, setSave] = useState(false);
  const [name, setName] = useState('');

  const saveGradient = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        username: name
      })
    };
    fetch(apiEndpoint, requestOptions)
      .then(response => response.json())
      .then(() => {
        handleUpdate();
        setSave(false)
      })
      .catch(response => console.log(response))
  }
  
  const randomizeColors = () => {
    setColor1(randomColor().toUpperCase());
    setColor2(randomColor().toUpperCase());
  };

  useEffect(() => {
    randomizeColors();
  }, []);

  useEffect(() => {
    const handleUpdateColors  = (data1, data2) => {
      setValues(prevValues => ({
        ...prevValues,
        firstColor: data1,
        secondColor: data2
      }))
    };

    handleUpdateColors(color1, color2);
  }, [color1, color2, setValues]);

  const fullGradientCode = `
  background: ${color1};
  background: -webkit-${gradientCode};
  background: -moz-${gradientCode};
  background: ${gradientCode};`;

  const getLink = () => {
    const link = new URL(window.location.href);
    link.searchParams.append('gt', values.gradType);
    link.searchParams.append('gd', values.direction);
    link.searchParams.append('c1', values.firstColor);
    link.searchParams.append('c2', values.secondColor);

    navigator.clipboard.writeText(link);
  }

  getLink()

  return (
    <section className={styles.sidebar}>
      <h1 className={styles.title}>Css Gradient Generator</h1>

      <p className={styles.subtitles}>Style</p>
      <div className={styles.type}>
        <Button text='Linear' handleClick={() => {
          setType('linear');
          setValues({
            ...values,
            gradType: 'linear',
          })
        }} />
        <Button text='Radial' handleClick={() => {
          setType('radial');
          setValues({
            ...values,
            gradType: 'radial',
          })
        }} />
      </div>

      <Direction type={type} values={values} setValues={setValues}/>

      <p className={styles.subtitles}>Colors</p>
      <div className={styles.colors}>
        <input
          type='color'
          className={styles.color}
          value={color1}
          onChange={e => setColor1(e.target.value)} />

        <input
          type='color'
          className={styles.color}
          value={color2}
          onChange={e => setColor2(e.target.value)} />

        <Button text='Random' handleClick={()=> randomizeColors()} />
      </div>


      <p className={styles.subtitles}>Output format</p>
      <div className={styles.output}>

        <Button text='Hex' handleClick={() => {
          setValues({
            ...values, 
            firstColor: color1,
            secondColor: color2
          })
          }}/>

        <Button text='Rgba' handleClick={() => {
          setValues({
            ...values, 
            firstColor: hexToRGB(color1),
            secondColor: hexToRGB(color2)
          })
          }}/>

      </div>

      <GetButton text='Get CSS' 
        handleClick={(e) => {
          navigator.clipboard.writeText(fullGradientCode);
          e.target.innerHTML = 'Yay! Copied to Clipboard!';
          setTimeout(function(){
            e.target.innerHTML = 'Get CSS';
          }, 1000);
        }} />

      <GetButton text='Get Share Link' otherClass={styles.share}
        handleClick={(e) => {
          getLink()
          e.target.innerHTML = 'Yay! Copied to Clipboard!';
          setTimeout(function(){
            e.target.innerHTML = 'Get Share Link';
          }, 1000);
        }}
      />

      {save === true ?
        <div className={styles.name}>
          <label htmlFor='name'>Insert your name:</label>
          <input type='text' name='name' onChange={e => setName(e.target.value)} className={styles.input} />
          <GetButton
            text='Save'
            otherClass={styles.save}
            handleClick={() => {
              saveGradient();
            }} />
        </div> :
        <GetButton
          text='Save this gradient'
          otherClass={styles.save}
          handleClick={() => setSave(true)}
        />
      }

      <Footer />
    </section>
  )
}
