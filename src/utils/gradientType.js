export const gradientType = (values) => {
  if (values.gradType === 'linear') {
    return `${values.gradType}-gradient(${values.direction}, ${values.firstColor}, ${values.secondColor})`;
  } else if (values.gradType === 'radial' && values.direction === 'ellipse at center') {
    return `${values.gradType}-gradient(${values.direction}, ${values.firstColor}, ${values.secondColor})`;
  } else {
    return `${values.gradType}-gradient(circle at ${values.direction}, ${values.firstColor}, ${values.secondColor})`;
  }
};
