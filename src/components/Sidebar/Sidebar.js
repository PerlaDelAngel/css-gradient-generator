import styles from './Sidebar.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
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

export default function Sidebar() {
  const [type, setType] = useState('linear');

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
        <Button img={upLeft} alt='up left arrow' />
        <Button img={up} alt='top arrow' />
        <Button img={upRight} alt='up right arrow' />
        <Button img={left} alt='left arrow' />
        {type === 'radial' ? <Button img={circle} alt='left arrow' /> : <div/>}
        <Button img={right} alt='right arrow' />
        <Button img={downLeft} alt='down left arrow' />
        <Button img={down} alt='down arrow' />
        <Button img={downRight} alt='down right arrow' />
      </div>

      <p className={styles.subtitles}>Colors</p>
      <div className={styles.colors}>
        <input type='color' className={styles.color}></input>
        <input type='color' className={styles.color}></input>
        <Button text='Random' />
      </div>

      <p className={styles.subtitles}>Output format</p>
      <div className={styles.output}>
        <Button text='Hex' />
        <Button text='Rgba' />
      </div>

      <button className={`${styles.get} ${styles.getcss}`}>Get CSS</button>
      <button className={`${styles.get} ${styles.share}`}>Get Share Link</button>

      <Footer/>
    </section>
  )
}
