import * as utils from '../utils';

function fillPrimaryOverlay() {
    const [primary, background] = utils.getDial(this, ['primary', 'background']);
    const newAlpha = background.alpha === 100 ? 90 : background.alpha === 90 ? 50 : 30;
    return primary.setAlpha(newAlpha);
}

export {
    // Color
    fillPrimaryOverlay
};