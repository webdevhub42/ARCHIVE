import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    UX2,
    components
} from '@wsb/guac-widget-core';

const {
    Link
} = components;

const linkShape = PropTypes.shape({
    url: PropTypes.string,
    pageId: PropTypes.string,
    widgetId: PropTypes.string,
    linkId: PropTypes.string,
    target: PropTypes.string
});

export default class Image extends Component {

    static propTypes = {
        image: PropTypes.shape({
            alt: PropTypes.string,
            src: PropTypes.string,
            link: linkShape,
            type: PropTypes.oneOf(['image', 'background']),
            height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            backgroundSize: PropTypes.oneOf(['contain', 'cover']),
            style: PropTypes.object,
            imageStyle: PropTypes.object,
            enableInlineImageEdit: PropTypes.bool,
            imageData: PropTypes.object
        }),
        widgetPreset: PropTypes.string
    };

    render() {
        const {
            image,
            widgetPreset
        } = this.props;
        const {
            link,
            type = 'image',
            style: wrapperStyle = {},
            imageStyle = {},
            height,
            width,
            enableInlineImageEdit,
            ...rest
        } = image;
        let imageProps = {
            imageData: {
                image
            },
            style: {
                height,
                width,
                ...imageStyle
            }
        };
        const wrapperProps = {
            style: {
                marginLeft: 'auto',
                marginRight: 'auto',
                ...wrapperStyle
            }
        };
        const isImage = type === 'image';
        if (!isImage) {
            wrapperProps.style.width = '100%';
        }
        if (!enableInlineImageEdit) {
            Object.keys(rest).forEach(key => {
                const obj = key === 'data-route' || key.startsWith('data-field') ?
                    wrapperProps :
                    imageProps;
                obj[key] = rest[key];
            });
        } else {
            imageProps = { ...imageProps,
                ...rest
            };
        }
        const ImgComponent = widgetPreset === 'about1' ? UX2.Element.Image.Thumbnail : UX2.Element.Image;
        const imageComponent = isImage ? ( <
            ImgComponent tag = 'img' { ...imageProps
            }
            />
        ) : ( <
            UX2.Component.Background { ...image
            }
            backgroundImage = {
                image.src
            }
            style = {
                imageProps.style
            }
            />
        );
        const el = link ? ( <
            Link linkData = {
                link
            } > {
                imageComponent
            } <
            /Link>
        ) : imageComponent;

        return ( <
            UX2.Element.Wrapper.Image { ...wrapperProps
            } > {
                el
            } <
            /UX2.Element.Wrapper.Image>
        );
    }
}