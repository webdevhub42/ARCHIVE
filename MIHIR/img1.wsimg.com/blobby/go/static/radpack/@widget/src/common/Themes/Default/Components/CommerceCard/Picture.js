import React from 'react';
import {
    UX2
} from '@wsb/guac-widget-core';
import {
    replaceImageSizeParams
} from '../../../../utils/image';

export function CommerceCardPicture({
    assetUrl,
    overlayAlpha,
    imageCropMethod,
    dataAids = {},
    ...props
}) {
    if (!assetUrl) {
        return null;
    }

    const style = {
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: imageCropMethod === 'shrink_to_fit' ? 'contain' : 'cover'
    };

    const imageUrl = replaceImageSizeParams(assetUrl, '/:/rs=w:{width},h:{height},cg:false,m');

    const content = ( <
        UX2.Component.Background backgroundImage = {
            imageUrl
        }
        overlayAlpha = {
            overlayAlpha
        }
        style = {
            style
        }
        data - aid = {
            dataAids.image
        }
        />
    );

    return this.merge({
        children: content
    }, props);
}
