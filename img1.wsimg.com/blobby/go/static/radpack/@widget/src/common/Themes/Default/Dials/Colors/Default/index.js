import * as colors from './colors';
import * as colorDials from './colorDials';
import * as backgroundColors from './backgroundColors';
import * as borderColors from './borderColors';
import * as fillColors from './fillColors';

export {
    colors,
    colorDials,
    backgroundColors,
    borderColors
};

export default {
    ...colors,
    ...colorDials,
    ...backgroundColors,
    ...borderColors,
    ...fillColors
};