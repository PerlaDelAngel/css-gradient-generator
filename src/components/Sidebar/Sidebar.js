import styles from './Sidebar.module.css';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import upLeft from '../../assets/Up Left.png';
import up from '../../assets/Up Arrow.png';
import upRight from '../../assets/Up Right.png';
import left from '../../assets/Left Arrow.png';
import right from '../../assets/Right Arrow.png';
import downLeft from '../../assets/Down Left.png';
import down from '../../assets/Down Arrow.png';
import downRight from '../../assets/Down Right.png';
import circle from '../../assets/Circle.png';
import Footer from '../Footer/Footer';
import { randomColor, convertToRgb } from '../../utils/colors';

export default function Sidebar() {
  const [type, setType] = useState('linear'); 
  const [color1, setColor1] = useState(''); 
  const [color2, setColor2] = useState('');

  const [values, setValues] = useState({
    gradType: 'linear',
    direction: 'to bottom right',
    firstColor: '',
    secondColor: ''
  });
  
  const randomizeColors = () => {
    setColor1(randomColor());
    setColor2(randomColor());
  };

  useEffect(() => {
    randomizeColors();
  }, []);

  useEffect(() => {
    setValues({
      ...values,
      firstColor: color1,
      secondColor: color2
    })
  }, [color1, color2]);

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


      <p className={styles.subtitles}>Direction</p>
      <div className={styles.direction}>
        <Button
          img={upLeft}
          alt='up left arrow'
          handleClick={() => setValues({
            ...values, 
            direction: 'to bottom right',
          })}
          />

        <Button
          img={up}
          alt='top arrow'
          handleClick={() => setValues({
            ...values, 
            direction: 'to bottom',
          })}/>

        <Button
          img={upRight}
          alt='up right arrow'
          handleClick={() => setValues({
            ...values, 
            direction: 'to bottom left',
          })}/>

        <Button
          img={left}
          alt='left arrow'
          handleClick={() => setValues({
            ...values, 
            direction: 'to right',
          })}/>

        {type === 'radial' ?
          <Button img={circle} alt='left arrow' handleClick={() => setValues({
            ...values, 
            direction: 'ellipse at center',
          })} /> :
          <div />}

        <Button
          img={right}
          alt='right arrow'
          handleClick={() => setValues({
            ...values, 
            direction: 'to left',
          })}/>

        <Button
          img={downLeft}
          alt='down left arrow'
          handleClick={() => setValues({
            ...values, 
            direction: 'to top right',
          })}/>

        <Button
          img={down}
          alt='down arrow'
          handleClick={() => setValues({
            ...values, 
            direction: 'to top',
          })}/>

        <Button
          img={downRight}
          alt='down right arrow'
          handleClick={() => setValues({
            ...values, 
            direction: 'to top left',
          })}/>
      </div>


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
            firstColor: convertToRgb(color1),
            secondColor: convertToRgb(color2)
          })
          }}/>

      </div>


      <button className={`${styles.get} ${styles.getcss}`}>Get CSS</button>

      <button className={`${styles.get} ${styles.share}`}>Get Share Link</button>

      <Footer />
    </section>
  )
}
