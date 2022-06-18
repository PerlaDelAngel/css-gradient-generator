export const linearToRadial = (values) => {
  if (values.direction === 'to bottom right') {
    return 'left top';
  } else if (values.direction === 'to bottom') {
    return 'center top';
  } else if (values.direction === 'to bottom left') {
    return 'right top';
  } else if (values.direction === 'to right') {
    return 'left center';
  } else if (values.direction === 'to left') {
    return 'right center';
  } else if (values.direction === 'to top right') {
    return 'left bottom';
  } else if (values.direction === 'to top') {
    return 'center bottom';
  } else if (values.direction === 'to top left') {
    return 'right bottom';
  } else {
    return values.direction;
  }
}

export const radialToLinear = (values) => {
  if (values.direction === 'left top') {
    return 'to bottom right';
  } else if (values.direction === 'center top') {
    return 'to bottom';
  } else if (values.direction === 'right top') {
    return 'to bottom left';
  } else if (values.direction === 'left center') {
    return 'to right';
  } else if (values.direction === 'right center') {
    return 'to left';
  } else if (values.direction === 'left bottom') {
    return 'to top right';
  } else if (values.direction === 'center bottom') {
    return 'to top';
  } else if (values.direction === 'right bottom') {
    return 'to top left';
  } else {
    return values.direction;
  }
}