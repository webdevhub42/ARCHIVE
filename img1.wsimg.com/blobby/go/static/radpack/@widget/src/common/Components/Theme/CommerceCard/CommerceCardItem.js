import PropTypes from 'prop-types';
import {
    UX2
} from '@wsb/guac-widget-core';

export class CommerceCardItem extends UX2.utils.createElement('CommerceCard', 'Item') {
    static propTypes = {
        name: PropTypes.string.isRequired,
        duration: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        price: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        ribbonText: PropTypes.string,
        cardSize: PropTypes.object,
        imageShape: PropTypes.string,
        imageCropMethod: PropTypes.string,
        hasImageBorder: PropTypes.bool,
        productType: PropTypes.string,
        isBoxed: PropTypes.bool,
        style: PropTypes.object,
        eyebrowText: PropTypes.string,
        footerText: PropTypes.string,
        footerAlert: PropTypes.bool,
        eventDate: PropTypes.string,
        buttonText: PropTypes.string,
        priceText: PropTypes.string,
        salePrice: PropTypes.string,
        ratings: PropTypes.element,
        dataAids: PropTypes.objectOf(PropTypes.string),
        dataRoutes: PropTypes.objectOf(PropTypes.string)
    };
}