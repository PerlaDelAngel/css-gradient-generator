export const apiEndpoint = 'https://62a2420ccc8c0118ef5fbbf9.mockapi.io/gradients';

export const saveGradient = (gradientData) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gradientData)
  };
  fetch(apiEndpoint, requestOptions)
    .then(response => response.json())
    .catch(response => console.log(response))
}