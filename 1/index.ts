import { data } from './data';

const reg = /-?\d+/

const getFirst = (s: string): number => {
    for (let i = 0;i<s.length;i++) {
        if (reg.test(s[i]))
            return parseInt(s[i]);
    }
}

const getLast = (s: string): number => {
    for (let i = 0;i<=s.length;i++) {
        if (reg.test(s[s.length - i]))
            return parseInt(s[s.length -i]);
    }
}

const combineValues = (v1: number): (v2: number) => number => (v2: number) => parseInt(`${v1}${v2}`);

function calculateCalibration(values: string[]): number {
  let result = 0;

  values.forEach((line) => {
    const v1 = getFirst(line) || 0;
    const v2 = getLast(line) || 0;
    result += combineValues(v1)(v2);
  });

  return result;
}

const calibration = calibration(data);