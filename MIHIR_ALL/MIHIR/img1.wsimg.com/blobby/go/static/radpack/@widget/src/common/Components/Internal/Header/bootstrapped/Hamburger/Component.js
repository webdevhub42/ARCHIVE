import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    omit,
    throttle
} from 'lodash';
import {
    UX2,
    constants
} from '@wsb/guac-widget-core';
import {
    getMobileRenderContainer,
    getMobileViewportHeight
} from '../../../../../utils/elements';
import Toggle from '../common/Toggle';
import dataAids from '../../constants/dataAids';
import {
    ICON_SIZE
} from '../../../../../constants';

class Hamburger extends Component {
    constructor() {
        super(...arguments);
        this.handleChange = throttle(this.handleChange.bind(this), 100, {
            leading: false
        });
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.startY = 0;
        this.state = {
            open: false
        };
    }

    componentDidUpdate(prevProps, {
        open
    }) {
        const {
            openWidth,
            isMobile,
            renderMode
        } = this.props;

        if (open !== this.state.open) {
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event(`NavigationDrawer${this.state.open ? 'Opened' : 'Closed'}`));
            }
            const {
                toggleId
            } = this.props;
            const el = document.getElementById(toggleId);
            if (el) {
                el.style.maxWidth = this.state.open ? openWidth : 0;
                el.style.boxShadow = this.state.open ? '0 2px 6px 0px rgba(0,0,0,0.2)' : '';

                if (isMobile) {
                    el.style.height = `${getMobileViewportHeight(renderMode)}px`;
                    this.toggleScrolling(this.state.open);
                }
            }
        }
    }

    toggleScrolling(open) {
        const {
            renderMode
        } = this.props;
        const elem = getMobileRenderContainer(renderMode);

        // disable/enable scroll by turn off/on touch event.
        // applying `overflow: hidden` on body element is a better solution, but it won't work on published site on IOS device.
        if (renderMode === constants.renderModes.PUBLISH) {
            const {
                uniqueId
            } = this.props;
            const navElem = document.getElementById(`${uniqueId}-navId-mobile`);

            if (open) {
                navElem.addEventListener('touchstart', this.handleTouchStart);
                navElem.addEventListener('touchmove', this.handleTouchMove);
            } else {
                navElem.removeEventListener('touchstart', this.handleTouchStart);
                navElem.removeEventListener('touchmove', this.handleTouchMove);
            }
        } else {
            elem.style.setProperty('overflow-y', open ? 'hidden' : 'auto', 'important');
        }
    }

    handleTouchStart(e) {
        const touch = e.touches[0];
        const {
            clientY
        } = touch;

        this.startY = clientY;
    }

    handleTouchMove(e) {
        const {
            uniqueId
        } = this.props;
        const navContainerElem = document.getElementById(`${uniqueId}-navContainerId-mobile`);
        const navLinksContentElem = document.getElementById(`${uniqueId}-navLinksContentId-mobile`);
        const minBottom = navContainerElem.getBoundingClientRect().bottom;
        const {
            bottom
        } = navLinksContentElem.getBoundingClientRect();
        const {
            scrollTop
        } = navContainerElem;

        const touch = e.touches[0];
        const {
            clientY
        } = touch;

        // disable touch event when:
        // 1: reach the bottom of the element but user still want to scroll down.
        // or
        // 2: reach the top of the element but user still want to scroll up.
        if ((clientY < this.startY && bottom <= minBottom) || (clientY >= this.startY && scrollTop <= 0)) {
            e.preventDefault();
        } else {
            e.stopPropagation();
        }
    }

    handleChange(open) {
        this.setState({
            open
        });

        if (open) {
            const parallaxElement = document.getElementById(this.props.parallaxId);
            if (parallaxElement) {
                parallaxElement.style.transform = 'none';
            }
        }
    }

    renderIcon() {
        const {
            icon,
            openIcon
        } = this.props;
        const {
            open
        } = this.state;

        if (open && openIcon === 'close') return <UX2.Element.CloseIcon size = {
            ICON_SIZE
        }
        />;
        return <UX2.Element.Icon.Hamburger icon = {
            open ? openIcon : icon
        }
        size = {
            ICON_SIZE
        }
        minTarget = {
            true
        }
        />;
    }

    render() {
        const props = omit(this.props, ['Component', 'renderMode']);
        const {
            style,
            staticContent = {}
        } = props;
        return ( <
            Toggle { ...props
            }
            onChange = {
                this.handleChange
            }
            closeAttr = 'data-close'
            data - edit - interactive = {
                true
            }
            closeOnOutsideClick = {
                true
            }
            style = {
                {
                    border: 0,
                    justifyContent: 'flex-start',
                    ...style
                }
            }
            data - aid = {
                dataAids.HAMBURGER_MENU_LINK
            }
            aria - label = {
                staticContent.hamburgerIcon || 'Hamburger Site Navigation Icon'
            } >
            {
                this.renderIcon()
            } <
            /Toggle>
        );
    }
}

Hamburger.propTypes = {
    toggleId: PropTypes.string.isRequired,
    uniqueId: PropTypes.string.isRequired,
    parallaxId: PropTypes.string,
    updateParallaxSpeed: PropTypes.func,
    icon: PropTypes.string,
    openIcon: PropTypes.string,
    openWidth: PropTypes.string,
    style: PropTypes.object,
    staticContent: PropTypes.object,
    isMobile: PropTypes.bool,
    renderMode: PropTypes.string
};

Hamburger.defaultProps = {
    icon: 'hamburger',
    openIcon: 'hamburger',
    openWidth: '100%',
    style: {},
    staticContent: {},
    isMobile: true
};

export default Hamburger;
