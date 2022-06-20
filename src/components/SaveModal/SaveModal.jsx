import ReactDOM from "react-dom";
import styles from './SaveModal.module.css';
import { useState } from "react";
import GetButton from "../GetButton/GetButton";
import { apiEndpoint } from "../../utils/api";

export default function SaveModal ({ open, onClose, values, handleUpdate}) {
  const [name, setName] = useState('');
  const [gradName, setGradName ] = useState('')

  const saveGradient = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        username: name,
        gradientName: gradName
      })
    };
    fetch(apiEndpoint, requestOptions)
      .then(response => response.json())
      .then(() => {
        handleUpdate();
        onClose()
      })
      .catch(response => console.log(response))
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveGradient();
  }

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <button className={styles.closeModal} onClick={onClose}> X </button>
          
          <form className={styles.name}>
          <p className={styles.text}>Share this gradient with other members of the community!</p>

          <label htmlFor='name' className={styles.text}>Please write your name below:</label>
          <input type='text' name='name' onChange={e => setName(e.target.value)} className={styles.input} />

          <label htmlFor='gradname' className={styles.text}>Set a name for your gradient:</label>
          <input type='text' name='gradname' onChange={e => setGradName(e.target.value)} className={styles.input} />

          {(name.length >= 2 && gradName.length >= 2 ) ? <GetButton text='Save' otherClass={styles.savegrad}
            handleClick={(e) => handleSave(e)} /> : null}
          
          </form>

        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}