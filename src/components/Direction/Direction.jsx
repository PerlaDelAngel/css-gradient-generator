import Button from '../Button/Button';

import upLeft from '../../assets/Up Left.png';
import up from '../../assets/Up Arrow.png';
import upRight from '../../assets/Up Right.png';
import left from '../../assets/Left Arrow.png';
import right from '../../assets/Right Arrow.png';
import downLeft from '../../assets/Down Left.png';
import down from '../../assets/Down Arrow.png';
import downRight from '../../assets/Down Right.png';
import circle from '../../assets/Circle.png';

import styles from './Direction.module.css';

export default function Direction({ type, values, setValues }) {
  const updateDir = (dir) => {
    setValues({
      ...values,
      direction: dir,
    })
  };

  return (
    <section>
      <p className={styles.subtitles}>Direction</p>
      <div className={styles.direction}>
        <Button
          img={upLeft}
          alt='up left arrow'
          handleClick={() => updateDir(type === 'linear' ? 'to bottom right' : 'left top')} />

        <Button
          img={up}
          alt='top arrow'
          handleClick={() => updateDir(type === 'linear' ? 'to bottom' : 'center top')} />

        <Button
          img={upRight}
          alt='up right arrow'
          handleClick={() => updateDir(type === 'linear' ? 'to bottom left' : 'right top')} />

        <Button
          img={left}
          alt='left arrow'
          handleClick={() => updateDir(type === 'linear' ? 'to right' : 'left center')} />

        {type === 'radial' ?
          <Button img={circle} alt='left arrow' handleClick={() => updateDir('ellipse at center')} /> :
          <div />}

        <Button
          img={right}
          alt='right arrow'
          handleClick={() => updateDir(type === 'linear' ? 'to left' : 'right center')} />

        <Button
          img={downLeft}
          alt='down left arrow'
          handleClick={() => updateDir(type === 'linear' ? 'to top right' : 'left bottom')} />

        <Button
          img={down}
          alt='down arrow'
          handleClick={() => updateDir(type === 'linear' ? 'to top' : 'center bottom')} />

        <Button
          img={downRight}
          alt='down right arrow'
          handleClick={() => updateDir(type === 'linear' ? 'to top left' : 'right bottom')} />
      </div>
    </section>
  )
}
