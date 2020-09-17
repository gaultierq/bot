import _ from 'lodash';

export * from './hooks';


export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

export const hashCode = str => {
  let hash = 0,
    i,
    chr;
  for (i = 0; i < _.size(str); i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return `${hash}`;
};
