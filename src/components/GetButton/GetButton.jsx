import styles from './GetButton.module.css';

export default function GetButton(props) {
  return (
    <button className={`${styles.get} ${props.otherClass}`} onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
