import React from 'react';
import {
    get
} from 'lodash';
import {
    constants,
    UX,
    UX2
} from '@wsb/guac-widget-core';
import * as baseIcons from '../../../IconPacks';
import {
    getSrcSet,
    getVCTScript,
    resolveImageSource,
    isInternalUrl,
    getValidUrl,
    addImageApiArgs,
    getImageDimensionData,
    getInferredDimensions
} from '../../../utils/image';
import {
    MIN_TARGET
} from '../../../constants';

const {
    PUBLISH
} = constants.renderModes;
const {
    HEADER,
    RSS
} = constants.widgetTypes;
const {
    SM_MIN,
    MD_MIN,
    LG_MIN,
    XL_MIN
} = constants.breakpoints;
let imgCount = 0;
const transparentPlaceholder = '//img1.wsimg.com/isteam/ip/static/transparent_placeholder.png';

const identity = s => s;

export function SVG(props) {
    return this.merge({
        tag: 'svg'
    }, props);
}

export function Icon({
    icon,
    size = 'medium',
    rotate = false,
    iconPack = {},
    color = false,
    minTarget = false,
    ...props
}) {
    const icons = Object.assign({}, baseIcons, iconPack);
    let iconSize = this.mapPropValue('iconSize', size);
    let padding = false;

    if (!icons[icon]) {
        // eslint-disable-next-line
        console.warn(`Incorrect icon name ${icon} - the issue is probably in ${this.base.widgetPreset}`);
        return false;
    }

    // Color logic
    if (color) {
        icon = icons[icon + 'Color'] ? icon + 'Color' : icon;
    }

    // Target size logic
    if (minTarget) {
        if (typeof iconSize === 'number' && iconSize < MIN_TARGET) {
            padding = ((MIN_TARGET - iconSize) / 2) + 'px';
            iconSize = MIN_TARGET + 'px';
        }
    }

    return this.merge({
        tag: 'svg',
        children: icons[icon],
        viewBox: '0 0 24 24',
        fill: 'currentColor',
        width: iconSize,
        height: iconSize,
        style: {
            color: 'inherit',
            display: 'inline-block',
            padding,
            transition: rotate && 'transform .33s ease-in-out',
            transform: rotate && `rotate(${rotate}deg)`,
            verticalAlign: 'middle'
        }
    }, props);
}

export function IconHamburger({
    animation,
    icon = 'hamburger',
    ...props
}) {
    const hamburgerStyle = {
        verticalAlign: 'top'
    };

    if (animation) {
        const {
            animationIcon,
            iconPack,
            animationStyle,
            keyFrame
        } = animation;

        return this.merge({
            tag: 'div',
            children: ( <
                React.Fragment >
                <
                UX2.Element.Icon icon = {
                    animationIcon
                }
                iconPack = {
                    iconPack
                }
                style = {
                    { ...animationStyle,
                        ...hamburgerStyle
                    }
                } { ...props
                }
                /> <
                UX.Style > {
                    keyFrame
                } <
                /UX.Style> <
                /React.Fragment>
            )
        });
    }
    return this.Icon(this.merge({
        icon,
        style: hamburgerStyle
    }, props));
}

export function IconSearch(props) {
    const mobileStyles = {
        top: '50%',
        transform: 'translateY(-50%)',
        left: 8
    };

    return this.Icon(this.merge({
        style: {
            '@xs-only': mobileStyles,
            '@sm-only': mobileStyles
        }
    }, props));
}

export function IconSocial(props) {
    const color = this.base.category === 'neutral';
    return this.Icon(this.merge({
        color,
        style: {
            color: 'highContrast'
        }
    }, props));
}

export function CloseIcon(props) {
    return this.Icon(this.merge({
        size: 'medium',
        icon: 'close',
        minTarget: true,
        style: {
            color: 'highContrast',
            [':hover']: {
                color: 'highlight'
            },
            cursor: 'pointer',
            lineHeight: '1.3em',
            fontStyle: 'normal'
        }
    }, props));
}

export function Image({
    src,
    alt,
    title, // Just filtering our `title` from `props`
    imageData,
    backgroundImage,
    imageSrcCallback = identity,
    useSrcSet = true,
    lazyLoad = true,
    preprocessed,
    ...props
}) {
    const {
        imageDimensionStyles,
        parsedImageData,
        enableImageDimension
    } = getImageDimensionData(imageData);
    const {
        renderMode
    } = (this.base && this.base.context) || {};
    const {
        widgetType = null
    } = this.base;
    const inferredImageDimensions = getInferredDimensions(parsedImageData);
    const resolvedAspectRatio = inferredImageDimensions.aspectRatio || parsedImageData.editedAspectRatio;
    const resolvedSrc = preprocessed ? src : imageSrcCallback(resolveImageSource(parsedImageData, src, backgroundImage));
    const newSrc = getValidUrl(resolvedSrc);
    const srcSet = useSrcSet && !enableImageDimension ? getSrcSet(newSrc) : null;
    const isLazyLoadedWidget = typeof window !== 'undefined'; // widgets that lazy load components containing UX2.Element.Image
    const shouldLazyLoad = lazyLoad && renderMode === PUBLISH && !isLazyLoadedWidget && isInternalUrl(resolvedSrc);
    const srcProps = shouldLazyLoad ? {
        'src': widgetType === HEADER && resolvedAspectRatio ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' :
            (inferredImageDimensions.outputHeight && inferredImageDimensions.outputWidth ?
                addImageApiArgs(transparentPlaceholder, {
                    rs: `w:${inferredImageDimensions.outputWidth},h:${inferredImageDimensions.outputHeight},cg:true,m,i:true`,
                    qt: 'q:1'
                }) :
                addImageApiArgs(resolvedSrc, {
                    qt: 'q:1'
                })),
        'data-srcLazy': newSrc,
        'data-srcSetLazy': srcSet
    } : {
        src: newSrc,
        srcSet
    };
    const borderRadiusStyle = enableImageDimension ? imageDimensionStyles : {
        borderRadius: props.style ? .borderRadius || 0
    };
    props.style = { ...props.style,
        ...borderRadiusStyle
    };

    return this.merge({
        tag: 'img',
        style: {
            'width': 'auto',
            'maxWidth': '100%',
            'marginHorizontal': 'auto',
            'marginVertical': '0',
            'verticalAlign': 'middle',
            '@xs-only': renderMode === PUBLISH && resolvedAspectRatio ? {
                height: `calc((100vw - 48px)/${resolvedAspectRatio})`
            } : {}
        },
        alt: alt || get(parsedImageData, 'alt') || `image${++imgCount}`,
        ...srcProps
    }, props);
}

const RESPONSIVE_IMAGE_SIZES = [SM_MIN, MD_MIN, LG_MIN, XL_MIN];

function createSourceFromSize(src, size) {
    return addImageApiArgs(src, {
        rs: `w:${size}`
    });
}

function createSourceFromSizes(src, sizes) {
    return sizes.map(size => {
        return `${createSourceFromSize(src, size)} ${size}w`;
    });
}

function createMediaQueriesFromSizes(sizes) {
    return sizes.map((size, i) => {
        if (i === sizes.length - 1) {
            return `(min-width: ${size}px) ${size}px`;
        }
        const maxSize = sizes[i + 1] - 1;
        return `(min-width: ${size}px) and (max-width: ${maxSize}px) ${maxSize}px`;
    });
}

// An image element that receives an array of sizes/breakpoints and generates
// the appropriate sizes and srcSet attributes for the responsive images,
// allowing the browser to load smaller images based on the user's viewport.
export function ImageResponsive({
    src,
    imageData,
    backgroundImage,
    imageSrcCallback = identity,
    sizes = RESPONSIVE_IMAGE_SIZES,
    ...props
}) {
    const resolvedSrc = imageSrcCallback(resolveImageSource(imageData, src, backgroundImage));
    return this.Image(this.merge({
        // The smaller size is used for very old browsers that don't properly
        // support srcSet + sizes.
        src: createSourceFromSize(resolvedSrc, sizes[0]),
        srcSet: createSourceFromSizes(resolvedSrc, sizes).join(', '),
        sizes: createMediaQueriesFromSizes(sizes).join(', '),
        useSrcSet: false,
        preprocessed: true,
        imageData
    }, props));
}

export function ImageThumbnail(props) {
    return this.Image(this.merge({
        style: {
            borderRadius: '50%',
            objectFit: 'cover'
        }
    }, props));
}

export function ImageLogo({
    hasOverhang,
    ...props
}) {
    const overhangImagePadding = 8;
    const mobileStyles = {
        display: 'block',
        margin: '0 auto',
        maxHeight: hasOverhang ? (80 + overhangImagePadding) : 80
    };

    return this.Image(this.merge({
        style: {
            'maxWidth': '100%',
            'objectFit': 'contain',
            '@xs-only': {
                maxWidth: 224,
                ...mobileStyles
            },
            '@sm-only': {
                ...mobileStyles
            }
        }
    }, props));
}

export function WrapperImage({
    children,
    ...props
}) {
    const wrapperImageChildren = [children];
    const {
        renderMode
    } = (this.base && this.base.context) || {};
    if (renderMode === PUBLISH && children && children.props['data-aid'] === 'BACKGROUND_IMAGE_RENDERED') {
        const {
            imageData,
            src,
            backgroundImage,
            imageSrcCallback = s => s
        } = children.props;
        const resolvedSrc = imageSrcCallback(resolveImageSource(imageData, src, backgroundImage));
        wrapperImageChildren.push( <
            script dangerouslySetInnerHTML = {
                {
                    __html: getVCTScript(resolvedSrc)
                }
            }
            />
        );
    }
    return this.merge({
        tag: 'figure',
        children: wrapperImageChildren,
        style: {
            position: 'relative',
            display: 'inline-block',
            margin: 0
        }
    }, props);
}

export function Figure(props) {
    const floatProps = getImgFloat(props.alignment);
    const {
        widgetType = null
    } = this.base;
    const display = widgetType === RSS ? 'block' : 'flex';
    const style = {
        display,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%',
        marginLeft: '0',
        marginTop: '0',
        marginRight: '0',
        marginBottom: 'medium',
        textAlign: 'center'
    };
    // Floats only apply at desktop and above
    if (floatProps) {
        style['@md'] = floatProps;
    }
    return this.merge({
        tag: 'figure',
        style
    }, props);
}

export function FigCaption(props) {
    return this.Text(this.merge({
        tag: 'figcaption',
        typography: 'DetailsAlpha',
        style: {
            backgroundColor: 'section',
            paddingVertical: 'xxsmall',
            paddingHorizontal: 'xsmall'
        }
    }, props, {
        section: 'alt'
    }));
}

export function CarouselFigCaption(props) {
    return this.Text(this.merge({
        tag: 'div',
        typography: 'BodyAlpha',
        style: {
            'textAlign': 'center',
            'paddingVertical': 0,
            'margin': '0 auto',
            'overflowWrap': 'break-word',
            'wordWrap': 'break-word',
            '@sm': {
                maxWidth: 700
            }
        }
    }, props));
}

export function CarouselFigCaptionOverlay(props) {
    return this.Text(this.merge({
        category: 'accent',
        section: 'overlay',
        typography: 'BodyAlpha',
        featured: true,
        style: {
            'backgroundColor': 'transparent',
            'display': 'flex',
            'width': '100%',
            'alignItems': 'center',
            'justifyContent': 'flex-end',
            'position': 'absolute',
            'bottom': 0,
            '> *': {
                backgroundColor: 'section',
                padding: 'xsmall',
                flexBasis: 'auto'
            },
            '> :first-child': {
                flexGrow: 1
            },
            '> :last-child': {
                flexGrow: 0
            }
        }
    }, props));
}

function getImgFloat(alignment) {
    const baseStyles = {
        clear: 'both',
        maxWidth: '50%'
    };
    switch (alignment) {
        case 'left':
            return Object.assign({
                float: 'left',
                marginRight: 'medium'
            }, baseStyles);
        case 'right':
            return Object.assign({
                float: 'right',
                marginLeft: 'medium'
            }, baseStyles);
        default:
            return null;
    }
}

export function Video(props) {
    return this.merge({
        tag: 'video'
    }, props);
}