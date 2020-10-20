import { log } from './log';

export const sum = (val1: number, val2: number) => {
    return val1 + val2;
};

export const sumAndLog = (val1: number, val2:number) => {
    const result = sum(val1, val2);

    log(`${val1} + ${val2} = ${result}`);

    return result;
};
