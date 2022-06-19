import { useState, useEffect } from "react";
import { apiEndpoint } from "../../utils/api";
import SavedGrad from "../SavedGrad/SavedGrad";

export default function Gradients({update}) {
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

  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '1rem 2rem'
  }

  return (
    <>
      <h2 style={{textAlign: 'center'}}>Previously saved gradients</h2>
      <section style={containerStyles}>
        {gradients?.map((grad) => 
          <SavedGrad values={grad} key={grad.id}/>
        )}
      </section>
    </>
  )
}