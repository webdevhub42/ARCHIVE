import React from 'react';
import {
    UX,
    UX2
} from '@wsb/guac-widget-core';
import keyframes from './constants/keyframes';

export function Ripple(props) {
    const {
        SVG
    } = UX2.Element;

    return this.merge({
        tag: 'div',
        children: ( <
            React.Fragment >
            <
            SVG viewBox = '0 0 44 44'
            width = '3em'
            height = '3em'
            fill = 'none'
            fillRule = 'evenodd'
            stroke = 'currentColor' >
            <
            circle cx = '22'
            cy = '22'
            r = '20' > < /circle> <
            /SVG> <
            UX.Style > {
                keyframes.loaderRipple
            } < /UX.Style> <
            /React.Fragment>
        ),
        style: {
            '> svg': {
                animation: 'ripple 0.5s infinite cubic-bezier(.64,.21,.39,.9);',
                transformOrigin: 'center'
            }
        }
    }, props);
}

export function Balance(props) {
    const {
        SVG
    } = UX2.Element;

    return this.merge({
        tag: 'div',
        children: ( <
            React.Fragment >
            <
            SVG viewBox = '0 0 44 44'
            width = '3em'
            height = '3em'
            fill = 'currentColor' >
            <
            path fillRule = 'evenodd'
            d = 'M31.968 23H12.032c-.57 0-1.032-.448-1.032-1 0-.553.462-1 1.032-1h19.936c.57 0 1.032.447 1.032 1 0 .552-.462 1-1.032 1' / >
            <
            /SVG> <
            UX.Style > {
                keyframes.loaderBalance
            } < /UX.Style> <
            /React.Fragment>
        ),
        style: {
            '> svg': {
                animation: 'balance 1s infinite cubic-bezier(.62,.06,.33,.79);',
                transformOrigin: 'center'
            }
        }
    }, props);
}

export function Cascade(props) {
    const {
        SVG
    } = UX2.Element;

    return this.merge({
        tag: 'div',
        children: ( <
            React.Fragment >
            <
            SVG viewBox = '0 0 44 44'
            width = '3em'
            height = '3em'
            fill = 'currentColor'
            fillRule = 'evenodd' >
            <
            circle cx = '12'
            cy = '22'
            r = '3' / >
            <
            circle cx = '22'
            cy = '22'
            r = '3' / >
            <
            circle cx = '32'
            cy = '22'
            r = '3' / >
            <
            /SVG> <
            UX.Style > {
                keyframes.loaderCascade
            } < /UX.Style> <
            /React.Fragment>
        ),
        style: {
            '> svg circle': {
                animation: 'cascade 1s infinite alternate;'
            },
            '> svg circle:nth-child(2)': {
                animationDelay: '0.3s'
            },
            '> svg circle:nth-child(3)': {
                animationDelay: '0.6s'
            }
        }
    }, props);
}

export function Blink(props) {
    const {
        SVG
    } = UX2.Element;

    return this.merge({
        tag: 'div',
        children: ( <
            React.Fragment >
            <
            SVG viewBox = '0 0 44 44'
            width = '3em'
            height = '3em'
            fill = 'currentColor'
            fillRule = 'evenodd' >
            <
            circle cx = '22'
            cy = '22'
            r = '11' / >
            <
            /SVG> <
            UX.Style > {
                keyframes.loaderBlink
            } < /UX.Style> <
            /React.Fragment>
        ),
        style: {
            '> svg circle': {
                animation: 'blink 2s infinite alternate cubic-bezier(.64,.21,.39,.9);'
            }
        }
    }, props);
}