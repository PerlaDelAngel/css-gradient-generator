import { useState, useEffect } from 'react';

import { randomColor, hexToRGB } from '../../utils/colors';

import Button from '../Button/Button';
import Direction from '../Direction/Direction';
import Footer from '../Footer/Footer';
import GetButton from '../GetButton/GetButton';
import SaveModal from '../SaveModal/SaveModal';

import styles from './Sidebar.module.css';


export default function Sidebar({ values, setValues, gradientCode, handleUpdate }) {
  const [type, setType] = useState(values.gradType);
  const [color1, setColor1] = useState(values.firstColor);
  const [color2, setColor2] = useState(values.secondColor);
  const [open, setIsOpen] = useState(false);

  const handleUpdateType = (gtype) => {
    setValues({
      ...values,
      gradType: gtype,
    })
  };

  const randomizeColors = () => {
    setColor1(randomColor());
    setColor2(randomColor());
  };

  useEffect(() => {
    const handleUpdateColors = () => {
      setValues(prevValues => ({
        ...prevValues,
        firstColor: color1,
        secondColor: color2
      }))
    };

    handleUpdateColors();
  }, [color1, color2, setValues]);

  //Generates gradient code to copy to clipboard
  const fullGradientCode = `
  background: ${color1};
  background: -webkit-${gradientCode};
  background: -moz-${gradientCode};
  background: ${gradientCode};`;

  //Generates link for 'share link' button
  const getLink = () => {
    const link = new URL(window.location.href);
    link.searchParams.append('gradType', values.gradType);
    link.searchParams.append('direction', values.direction);
    link.searchParams.append('firstColor', values.firstColor);
    link.searchParams.append('secondColor', values.secondColor);

    navigator.clipboard.writeText(link);
  };

  return (
    <section className={styles.sidebar}>
      <h1 className={styles.title}>Css Gradient Generator</h1>

      <p className={styles.subtitles}>Style</p>
      <div className={styles.type}>
        <Button text='Linear' handleClick={() => {
          setType('linear');
          handleUpdateType('linear');
        }} />
        <Button text='Radial' handleClick={() => {
          setType('radial');
          handleUpdateType('radial');
        }} />
      </div>

      <Direction type={type} values={values} setValues={setValues} />

      <p className={styles.subtitles}>Colors</p>
      <div className={styles.colors}>
        <input type='color' className={styles.color} value={color1}
          onChange={e => setColor1(e.target.value)} />

        <input type='color' className={styles.color} value={color2}
          onChange={e => setColor2(e.target.value)} />

        <Button text='Random' handleClick={() => randomizeColors()} />
      </div>

      <p className={styles.subtitles}>Output format</p>
      <div className={styles.output}>
        <Button text='Hex' handleClick={() => {
          setValues({
            ...values,
            firstColor: color1,
            secondColor: color2
          });
        }} />

        <Button text='Rgba' handleClick={() => {
          setValues({
            ...values,
            firstColor: hexToRGB(color1),
            secondColor: hexToRGB(color2)
          });
        }} />
      </div>

      <GetButton text='Get CSS'
        handleClick={(e) => {
          navigator.clipboard.writeText(fullGradientCode);
          e.target.innerHTML = 'Yay! Copied to Clipboard!';
          setTimeout(function () {
            e.target.innerHTML = 'Get CSS';
          }, 1000);
        }} />

      <GetButton text='Get Share Link' otherClass={styles.share}
        handleClick={(e) => {
          getLink();
          e.target.innerHTML = 'Yay! Copied to Clipboard!';
          setTimeout(function () {
            e.target.innerHTML = 'Get Share Link';
          }, 1000);
        }}
      />

      <GetButton text='Save this gradient' otherClass={styles.save} handleClick={() => setIsOpen(true)} />

      <SaveModal open={open} onClose={() => setIsOpen(false)} values={values} handleUpdate={handleUpdate}/>

      <Footer />
    </section>
  )
}
