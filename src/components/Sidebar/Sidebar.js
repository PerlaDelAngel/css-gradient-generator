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
  const [direction, setDirection] = useState(); //set default
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');

  const [values, setValues] = useState({
    gradType: type,
    gradDirection: direction,
    firstColor: '',
    secondColor: ''
  })



  const randomizeColors = () => {
    setColor1(randomColor());
    setColor2(randomColor());
  };

  useEffect(() => {
    randomizeColors();
  }, []);

  useEffect(() => {
    console.log(values)
  }, [values])
  

  return (
    <section className={styles.sidebar}>
      <h1 className={styles.title}>Css Gradient Generator</h1>


      <p className={styles.subtitles}>Style</p>
      <div className={styles.type}>
        <Button text='Linear' handleClick={() => setType('linear')} />
        <Button text='Radial' handleClick={() => setType('radial')} />
      </div>


      <p className={styles.subtitles}>Direction</p>
      <div className={styles.direction}>
        <Button
          img={upLeft}
          alt='up left arrow'
          handleClick={() => setDirection('to bottom right')} />

        <Button
          img={up}
          alt='top arrow'
          handleClick={() => setDirection('to bottom')} />

        <Button
          img={upRight}
          alt='up right arrow'
          handleClick={() => setDirection('to bottom left')} />

        <Button
          img={left}
          alt='left arrow'
          handleClick={() => setDirection('to right')} />

        {type === 'radial' ?
          <Button img={circle} alt='left arrow' handleClick={() => setDirection('ellipse at center')} /> :
          <div />}

        <Button
          img={right}
          alt='right arrow'
          handleClick={() => setDirection('to left')} />

        <Button
          img={downLeft}
          alt='down left arrow'
          handleClick={() => setDirection('to top right')} />

        <Button
          img={down}
          alt='down arrow'
          handleClick={() => setDirection('to top')} />

        <Button
          img={downRight}
          alt='down right arrow'
          handleClick={() => setDirection('to top left')} />
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
        {/* THESE TWO BUTTONS have to save in values the color in the correct format
        the default format is hex, so we would need to save it as is
        for rgba we need to convert in order to save */}
        <Button text='Hex' />
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
