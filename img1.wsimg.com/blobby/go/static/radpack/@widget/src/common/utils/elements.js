import {
    get
} from 'lodash';
import {
    constants
} from '@wsb/guac-widget-core';
const {
    renderModes
} = constants;

export const getMobileViewportContainer = renderMode => (
    renderMode === renderModes.PREVIEW ?
    document.querySelector('.mobile-phone-preview-container .viewport') || // desktop Preview, mobile container
    document.querySelector('#render-container') || // mobile Preview
    document.querySelector('body') // Theme Gallery
    :
    document.querySelector('body')
);

export const getMobileRenderContainer = renderMode => (
    renderMode === renderModes.PREVIEW ?
    document.querySelector('.mobile-phone-preview-container #render-container') ||
    document.querySelector('#render-container') ||
    document.querySelector('body') :
    document.querySelector('body')
);

export const getMobileViewportHeight = renderMode => {
    if (typeof document === 'undefined' || renderMode !== renderModes.PREVIEW) return '100vh';

    const viewportContainer = getMobileViewportContainer(renderMode);
    if (!viewportContainer) return '100vh';

    const scaler = document.querySelector('.mobile-phone-preview-container .ux-scaled');

    let scale = 1;
    if (scaler) {
        const matches = get(scaler, 'style.transform', '').match(/[0-9.]+/);
        if (matches && matches.length > 0) {
            scale = matches[0];
        }
    }

    return viewportContainer.getBoundingClientRect().height / scale;
};