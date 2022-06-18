export const linearToRadial = (direction) => {
  if (direction === 'to bottom right') {
    return 'left top';
  } else if (direction === 'to bottom') {
    return 'center top';
  } else if (direction === 'to bottom left') {
    return 'right top';
  } else if (direction === 'to right') {
    return 'left center';
  } else if (direction === 'to left') {
    return 'right center';
  } else if (direction === 'to top right') {
    return 'left bottom';
  } else if (direction === 'to top') {
    return 'center bottom';
  } else if (direction === 'to top left') {
    return 'right bottom';
  } else {
    return direction;
  }
}

export const radialToLinear = (direction) => {
  if (direction === 'left top') {
    return 'to bottom right';
  } else if (direction === 'center top') {
    return 'to bottom';
  } else if (direction === 'right top') {
    return 'to bottom left';
  } else if (direction === 'left center') {
    return 'to right';
  } else if (direction === 'ellipse at center') {
    return 'to bottom right';
  } else if (direction === 'right center') {
    return 'to left';
  } else if (direction === 'left bottom') {
    return 'to top right';
  } else if (direction === 'center bottom') {
    return 'to top';
  } else if (direction === 'right bottom') {
    return 'to top left';
  } else {
    return direction;
  }
}