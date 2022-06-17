import styles from './Direction.module.css';
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

export default function Direction({ type, values, setValues }) {
  return (
    <section>
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
          })} />

        <Button
          img={upRight}
          alt='up right arrow'
          handleClick={() => setValues({
            ...values,
            direction: 'to bottom left',
          })} />

        <Button
          img={left}
          alt='left arrow'
          handleClick={() => setValues({
            ...values,
            direction: 'to right',
          })} />

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
          })} />

        <Button
          img={downLeft}
          alt='down left arrow'
          handleClick={() => setValues({
            ...values,
            direction: 'to top right',
          })} />

        <Button
          img={down}
          alt='down arrow'
          handleClick={() => setValues({
            ...values,
            direction: 'to top',
          })} />

        <Button
          img={downRight}
          alt='down right arrow'
          handleClick={() => setValues({
            ...values,
            direction: 'to top left',
          })} />
      </div>
    </section>
  )
}
