import styles from './GetButton.module.css';

export default function GetButton({text, otherClass}) {
  return (
    <button className={`${styles.get} ${otherClass}`}>
      {text}
    </button>
  )
}
