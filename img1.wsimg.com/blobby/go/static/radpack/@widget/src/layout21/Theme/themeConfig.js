import {
    constants
} from '@wsb/guac-widget-core';
import {
    COMMON_BUTTON_CONFIG
} from '../../common/constants';

const {
    colorPackCategories,
    buttons
} = constants;
const {
    LIGHT,
    CUSTOM,
    LIGHT_ALT,
    LIGHT_COLORFUL,
    DARK,
    DARK_ALT,
    DARK_COLORFUL,
    COLORFUL
} = constants.paintJobs;

const id = 'layout21';

export default {
    id,
    name: 'mint',
    packs: {
        color: '#53DEBF',
        font: 'muli'
    },
    logo: {
        font: 'primary'
    },
    packCategories: {
        color: colorPackCategories.PRIMARY
    },
    headerProperties: {
        alignmentOption: 'left'
    },
    paintJobs: [
        LIGHT,
        LIGHT_ALT,
        CUSTOM,
        LIGHT_COLORFUL,
        COLORFUL,
        DARK_COLORFUL,
        DARK_ALT,
        DARK
    ],
    defaultPaintJob: CUSTOM,
    buttons: {
        primary: {
            fill: buttons.fills.SOLID,
            shape: buttons.shapes.ROUND,
            decoration: buttons.decorations.NONE,
            shadow: buttons.shadows.NONE,
            color: buttons.colors.PRIMARY
        },
        secondary: {
            fill: buttons.fills.SOLID,
            decoration: buttons.decorations.NONE,
            shadow: buttons.shadows.NONE,
            color: buttons.colors.PRIMARY
        },
        ...COMMON_BUTTON_CONFIG
    }
};