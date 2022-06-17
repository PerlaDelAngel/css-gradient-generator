import styles from './Button.module.css';

export default function Button(props) {
  return (
    <button className={styles.btn} onClick={props.handleClick}>
      {props.text}
      {props.img ? <img src={props.img} alt={props.alt} className={styles.btnImg}></img> : null}
    </button>
  )
}
