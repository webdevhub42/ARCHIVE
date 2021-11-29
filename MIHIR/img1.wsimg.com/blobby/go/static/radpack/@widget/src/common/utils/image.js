/* eslint-disable eqeqeq */
import {
    constants as coreConstants,
    utils
} from '@wsb/guac-widget-core';
import countVCTElement from './countVCTElement';

const {
    imageDimensionConfig,
    FIT_IMAGE,
    LANDSCAPE,
    CIRCLE
} = coreConstants.imageDimensions;

export const LANDSCAPE_ASPECT_RATIO = imageDimensionConfig[LANDSCAPE].aspectRatio;
export const CIRCLE_IMAGE_DIMENSION = CIRCLE;

export const srcSetSizes = [1, 1.5, 2, 3];
export const CDN_REGEX = /[.-]wsimg\.com\//;
const {
    hasOwnProperty
} = Object.prototype;

export function isInternalUrl(url) {
    return !!CDN_REGEX.test(url);
}

export function getSrcSet(src) {
    let srcSet = void 0;
    if (!src || !isInternalUrl(src)) {
        return srcSet;
    }
    const srcSets = [];
    const matches = src.split(/(h:|w:)([\d.]+)(,|\/|$)/g);
    const len = matches.length;
    let last = 0;
    for (let i = 2; i < len; i += 4) {
        // eslint-disable-next-line no-loop-func
        srcSetSizes.forEach((size, index) => {
            srcSets[index] = (srcSets[index] || '') + matches.slice(last, i).join('') + (parseFloat(matches[i]) * size);
        });
        last = i + 1;
    }
    try {
        srcSet = srcSets.map((val, index) => {
            val += matches.slice(last, len).join('');
            if (srcSetSizes[index] !== 1) {
                val += ` ${srcSetSizes[index]}x`;
            } else if (val !== src) {
                // If this happens, loop logic is broken
                throw new Error([src, val]);
            }
            return val;
        }).join(',\n');
    } catch (error) {
        // Ignore error
    }
    return srcSet || void 0;
}

export function getVCTScript(imageUrl) {
    if (!imageUrl) {
        return '';
    }
    const srcSet = (getSrcSet(imageUrl) || '').replace(/(\n)/gm, ' ');
    // non minified vctScript:
    /*
    (function() {
      ${countVCTElement};
      var image = new Image();
      image.onload = window.markVisuallyComplete;
      image.srcset = `${srcSet || imageUrl}`;
      image.src = `${imageUrl}`;
    })()
    */
    /* eslint-disable-next-line max-len */
    return `(function(){${countVCTElement};var i=new Image();i.onload=window.markVisuallyComplete;i.srcset="${srcSet || imageUrl}";i.src="${imageUrl}";})()`;
}

function parseOperationsUrl(operationsUrl) {
    if (!operationsUrl) {
        return [];
    }
    return operationsUrl
        .split('/')
        .filter(Boolean)
        .map((operation) => {
            const [name, value] = operation.split('=');
            return {
                name,
                value
            };
        });
}

function parseImageApiUrl(url) {
    if (!isInternalUrl(url)) {
        return null;
    }
    const [source, operations] = url.split('/:/');
    return {
        source,
        operations: parseOperationsUrl(operations)
    };
}

function stringifyParsedImageApiUrl({
    source,
    operations
}) {
    if (operations == null) {
        return source;
    }
    const operationsUrl = operations
        .map(({
            name,
            value
        }) => value == null ? name : `${name}=${value}`)
        .join('/');
    if (!operationsUrl) {
        return source;
    }
    return source + '/:/' + operationsUrl;
}

function toOperationsArray(operations) {
    if (operations == null) {
        return [];
    }
    if (typeof operations === 'string') {
        return parseOperationsUrl(operations);
    }
    if (Array.isArray(operations)) {
        return operations;
    }
    return Object.entries(operations).map(([name, value]) => ({
        name,
        value
    }));
}

export function addImageApiArgs(url, operations) {
    const parsedUrl = parseImageApiUrl(url);
    if (parsedUrl == null) {
        return url;
    }
    return stringifyParsedImageApiUrl({
        source: parsedUrl.source,
        operations: [
            ...parsedUrl.operations,
            ...toOperationsArray(operations)
        ]
    });
}

export function replaceImageApiArgs(url, operations) {
    const parsedUrl = parseImageApiUrl(url);
    if (parsedUrl == null) {
        return url;
    }
    // if the operation doesn't already exists, it's ignored
    parsedUrl.operations.forEach(operation => {
        const {
            name
        } = operation;
        if (hasOwnProperty.call(operations, name)) {
            // Replacing value by mutating the object
            operation.value = operations[name];
        }
    });
    return stringifyParsedImageApiUrl(parsedUrl);
}

// Please avoid this method if you can and use replaceImageApiArgs instead.
export function replaceImageSizeParams(url, replacement = '') {
    if (!url || typeof url !== 'string') {
        return '';
    }
    return url.replace(/\/:\/rs=w:[0-9]*,h:[0-9]*/, replacement);
}

export function stripParams(url = '') {
    return url.split('/:/')[0];
}

export function getValidUrl(url) {
    if (!isInternalUrl(url)) {
        return stripParams(url);
    }
    return url;
}

export function generateBackgroundUrl(background, includeDynamicResize = true) {
    const url = includeDynamicResize ?
        utils.generateBackgroundUrl(background) :
        utils.generateBackgroundUrl(background)
        .replace(/\/rs=w:{width},h:{height},cg:true,m\/cr=w:{width},h:{height},a[x]?:[^/]*/, '')
        .replace(/\/:$/, '');

    return getValidUrl(url);
}

export function resolveImageSource(imageData, legacySrc, fallback) {
    const url = imageData ? .imageUrl || imageData ? .image;
    if (typeof url === 'string') {
        return utils.generateImageServiceUrl(imageData);
    }

    if (fallback ? .fallbackBackgroundImageSrc) {
        return fallback.fallbackBackgroundImageSrc.replace(/\{(width|height)\}/g, '+0');
    }

    return legacySrc || '';
}

/* eslint-disable max-len */
export const lazyLoadImagesScriptMinified = 'var imageObserver=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){var r=e.target;r.src=r.getAttribute("data-srclazy"),r.removeAttribute("data-srclazy"),r.getAttribute("data-srcsetlazy")&&(r.srcset=r.getAttribute("data-srcsetlazy"),r.removeAttribute("data-srcsetlazy")),t.unobserve(r)}})},{rootMargin:"150px"});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[data-srclazy]").forEach(e=>imageObserver.observe(e))});';
/* lazy load images script:
var imageObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      var lazyImage = entry.target;
      lazyImage.src = lazyImage.getAttribute('data-srclazy');
      lazyImage.removeAttribute('data-srclazy');
      var srcsetlazy = lazyImage.getAttribute('data-srcsetlazy');
      if (srcsetlazy) {
        lazyImage.srcset = lazyImage.getAttribute('data-srcsetlazy');
        lazyImage.removeAttribute('data-srcsetlazy');
      }
      imgObserver.unobserve(lazyImage);
    }
  })
}, { rootMargin: '150px' });
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-srclazy]').forEach(node => imageObserver.observe(node));
});
*/

export function getImageDimensionData(imageData = {}) {
    const {
        outputWidth,
        outputHeight,
        imageDimension,
        enableImageDimension
    } = imageData;
    const imageDimensionStyles = {};
    const parsedImageData = { ...imageData
    };

    if (imageDimension) {
        if (imageDimension === FIT_IMAGE) {
            delete parsedImageData.outputHeight;
            delete parsedImageData.editedAspectRatio;
            imageDimensionStyles.borderRadius = 0;
        } else {
            const {
                aspectRatio,
                borderRadius
            } = imageDimensionConfig[imageDimension] || {};
            if (aspectRatio && outputWidth) {
                parsedImageData.outputHeight = outputWidth / aspectRatio;
            } else if (aspectRatio && outputHeight) {
                parsedImageData.outputWidth = outputHeight * aspectRatio;
            }
            imageDimensionStyles.borderRadius = borderRadius;
        }
    }

    return {
        imageDimensionStyles,
        parsedImageData,
        enableImageDimension
    };
}

export function getInferredDimensions(imageData = {}) {
    const {
        outputHeight,
        outputWidth,
        oHeight,
        oWidth,
        editedAspectRatio,
        enableImageDimension
    } = imageData;
    if (!editedAspectRatio) return false;
    const inferredHeight = outputHeight || oHeight || editedAspectRatio && (outputWidth || oWidth) && editedAspectRatio * (outputWidth || oWidth);
    const inferredWidth = outputWidth || oWidth || editedAspectRatio && (outputHeight || oHeight) && editedAspectRatio * (outputHeight || oHeight);
    const inferredAspectRatio = inferredWidth && inferredHeight && (inferredWidth / inferredHeight);
    return {
        outputHeight: inferredHeight,
        outputWidth: inferredWidth,
        aspectRatio: enableImageDimension ? inferredAspectRatio : editedAspectRatio
    };
}
