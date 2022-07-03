import { gradientType } from '../../utils/gradientType';

import styles from './SavedGrad.module.css';

export default function SavedGrad({ values }) {
  const gradientCode = gradientType(values);

  const styleGradient = {
    background: gradientCode,
    width: '100%',
    height: '6rem',
    borderRadius: '6px'
  }

  return (
    <article className={styles.card}>
      <div style={styleGradient} />
      <p className={styles.text}><span className={styles.bold}>Saved by:</span> {values.username}.</p>
      <p className={styles.text}><span className={styles.bold}>Gradient name:</span> {values.gradientName}.</p>
      <p className={styles.code}>Code:</p>
      <p className={styles.text}>background: {gradientCode};</p>
    </article>
  )
}
