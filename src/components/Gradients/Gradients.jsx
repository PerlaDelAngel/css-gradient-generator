import { useState, useEffect } from "react";

import { apiEndpoint } from "../../utils/api";

import SavedGrad from "../SavedGrad/SavedGrad";

import styles from './Gradients.module.css';

export default function Gradients({ update }) {
  const [gradients, setGradients] = useState(null);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => {
        return response.json()
      })
      .then((savedGrad) => {
        setGradients(savedGrad)
      })
      .catch(res => console.log(res))
  }, [update])



  return (
    <>
      <h2 className={styles.title}>Previously saved gradients</h2>
      <section className={styles.container}>
        {gradients?.map((grad) =>
          <SavedGrad values={grad} key={grad.id} />
        )}
      </section>
    </>
  )
}
