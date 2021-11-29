import React from 'react';
import {
    utils,
    UX2
} from '@wsb/guac-widget-core';
import {
    CATEGORY,
    PRIMARY,
    NEUTRAL,
    ACCENT,
    NONE,
    LIGHT_DARK
} from '../../../../constants/overlayTypes';
import {
    getValidUrl,
    addImageApiArgs
} from '../../../../utils/image';
import {
    DEFAULT_OVERLAY_TEXT_SHADOW
} from '../../../../constants';
import {
    omit
} from 'lodash';

export function Background({
    children,
    style,
    backgroundImage = '',
    backgroundPosition,
    backgroundSize,
    backgroundImage2,
    backgroundSize2,
    mobileImage,
    mobileSize = 'cover',
    imageData = {},
    ...props
}) {
    const {
        _instance
    } = this.base;
    const state = this.base.state || {};
    const {
        id,
        responsiveImage,
        backgroundImage: backgroundImageState,
        isResponsive,
        layers = [],
        widgetType,
        widgetPreset
    } = state;

    const _style = {
        backgroundPosition: backgroundPosition || 'center',
        backgroundSize: backgroundSize || 'cover',
        backgroundBlendMode: 'normal',
        backgroundRepeat: 'no-repeat',
        textShadow: 'none',
        ...style,
        transition: (style && style.transition ? style.transition + ', ' : '') + 'opacity 0.25s, background-size 0.25s, background-position 0.25s',
        ...state.backgroundBlendMode && {
            backgroundBlendMode: state.backgroundBlendMode
        },
        ...state.backgroundSize && {
            backgroundSize: state.backgroundSize
        },
        ...state.backgroundPosition && {
            backgroundPosition: state.backgroundPosition
        }
    };

    let loading;
    if (backgroundImage && !_instance) {
        // initial render, set as loading
        loading = {
            'data-guac-image': 'loading'
        };
    }

    let script;

    const overlay = props.overlay || this.constructor.getDefaultImageOverlayType(widgetType, widgetPreset);
    if (overlay !== NONE) {
        const {
            category
        } = this.base;
        let overlayColor = 'accentOverlay';
        if (overlay === CATEGORY) {
            overlayColor = 'sectionOverlay';
        } else if (overlay === PRIMARY) {
            overlayColor = 'primaryOverlay';
        } else if (overlay === NEUTRAL) {
            overlayColor = 'neutralOverlay';
        } else if (overlay === ACCENT) {
            overlayColor = 'accentOverlay';
        } else if (overlay === LIGHT_DARK) {
            if (category === 'primary') {
                const primaryColor = UX2.utils.getTheme(this.base.context, {
                    category: 'primary',
                    section: 'default'
                }).mapPropValue('backgroundColor', 'section');
                overlayColor = primaryColor.isLight() ? 'neutralOverlay' : 'accentOverlay';
            } else {
                overlayColor = 'sectionOverlay';
            }
        }
        overlayColor = UX2.utils.getTheme(this.base.context, {
            category,
            section: 'overlay'
        }).mapPropValue('backgroundColor', overlayColor);
        if (typeof props.overlayAlpha !== 'undefined') {
            overlayColor.alpha = props.overlayAlpha;
        } else if (typeof imageData.overlayAlpha !== 'undefined') {
            overlayColor.alpha = imageData.overlayAlpha;
        } else {
            overlayColor.alpha = this.constructor.getDefaultImageOverlayOpacity(widgetType, widgetPreset);
        }
        layers.push && layers.push(`linear-gradient(to bottom, ${overlayColor} 0%, ${overlayColor} 100%)`);
    }

    if (backgroundImageState) {
        if (widgetType !== 'HEADER') {
            _style.textShadow = DEFAULT_OVERLAY_TEXT_SHADOW;
        }
        if (isResponsive) {
            const url = responsiveImage ||
                utils.Image.getUrl(addImageApiArgs(backgroundImageState, {
                    qt: 'q:1'
                }), {
                    x: 50,
                    y: 50
                });
            _style.backgroundImage = `url("${getValidUrl(url.replace(/"/g, '\\"'))}")`;

            const options = layers.length > 0 ?
                {
                    useTreatmentData: true,
                    backgroundLayers: layers
                } :
                {};

            const html = [
                `new guacImage("${backgroundImageState}"`,
                `document.getElementById('${id}')`,
                `${JSON.stringify(options)})`
            ].join(',');
            script = ( <
                script key = {
                    id
                }
                dangerouslySetInnerHTML = {
                    {
                        __html: html
                    }
                } // eslint-disable-line react/no-danger
                />
            );
        } else if (backgroundImage) {
            backgroundImage = getValidUrl(backgroundImage);
            _style.backgroundImage = `url("${backgroundImage.replace(/"/g, '\\"')}")`;
        }

        if (layers.length > 0) {
            const bg = `url("${imageData?.image}")`;
            _style.backgroundImage = [].concat(layers, [_style.backgroundImage || bg || '']).filter(Boolean).join(', ');
        }

        if (backgroundImage2) {
            _style.backgroundImage = `${_style.backgroundImage}, url("${backgroundImage2.replace(/"/g, '\\"')}")`;
            if (backgroundSize2) {
                _style.backgroundSize = `${_style.backgroundSize}, ${backgroundSize2}`;
            }
        }

        if (layers.length) {
            _style.backgroundSize = `${'auto, '.repeat(layers.length)}${_style.backgroundSize}`;
        }

        if (mobileImage) {
            const mobileBgImage = layers.length ? `${layers.join(', ')}, url("${mobileImage.replace(/"/g, '\\"')}")` : `url("${mobileImage.replace(/"/g, '\\"')}")`;
            const mobileImageStyles = {
                backgroundImage: `${mobileBgImage} !important`,
                backgroundSize: mobileSize
            };
            _style['@xs-only'] = {
                ...mobileImageStyles,
                ..._style['@xs-only']
            };
            _style['@sm-only'] = {
                ...mobileImageStyles,
                ..._style['@sm-only']
            };
        }
    }

    return this.merge({
            id,
            style: _style,
            tag: 'div',
            role: 'img',
            children: [children, script],
            ...loading
        },
        omit(props, 'title') // we do not want to allow the title to be set on background images
    );
}