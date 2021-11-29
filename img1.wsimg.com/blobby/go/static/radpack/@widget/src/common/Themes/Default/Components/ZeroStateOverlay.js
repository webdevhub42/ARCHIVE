import React from 'react';
import {
    get
} from 'lodash';
import {
    UX2,
    constants as coreConstants
} from '@wsb/guac-widget-core';

export function ZeroStateOverlay({
    beforeContent,
    button = {},
    secondaryButton,
    afterContent,
    renderMode,
    ...props
}) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'inherit',
            border: '1px solid rgba(255,255,255,0.15)',
            backgroundColor: '!rgba(0,0,0,.7)',
            boxShadow: '0 4px 12px 0 rgba(117,117,117,0.4)',
            borderRadius: '8px',
            ['> :first-child']: {
                marginTop: 'large'
            },
            ['> :last-child']: {
                marginBottom: 'large'
            },
            paddingHorizontal: '100px',
            ['@xs-only']: {
                paddingHorizontal: 'large'
            }
        },
        buttonGroupWrapper: {
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'width': '100%',
            'marginVertical': '32px',
            ['> button']: {
                marginHorizontal: '8px'
            },
            '@xs-only': {
                marginVertical: '24px',
                flexDirection: 'column',
                ['> button']: {
                    width: '100%',
                    marginHorizontal: '0',
                    marginVertical: '8px'
                }
            }
        },
        buttonStyle: {
            ...button.style
        },
        ...secondaryButton && {
            secondaryButtonStyle: {
                ...secondaryButton.style
            }
        }
    };

    let structure = null;
    if (renderMode === coreConstants.renderModes.EDIT) {
        const Button = get(window, 'ux.Button', UX2.Element.Button);
        structure = ( <
            UX2.Element.Container.Fluid data - edit - interactive category = 'accent'
            section = 'overlay'
            style = {
                styles.container
            } > {
                beforeContent
            } <
            UX2.Element.Block style = {
                styles.buttonGroupWrapper
            } >
            <
            Button className = 'keep-defaults'
            style = {
                styles.buttonStyle
            } { ...button
            }
            /> {
                secondaryButton && ( <
                    Button design = 'defaultLightSecondary'
                    className = 'keep-defaults'
                    style = {
                        styles.secondaryButtonStyle
                    } { ...secondaryButton
                    }
                    />
                )
            } <
            /UX2.Element.Block> {
                afterContent
            } <
            /UX2.Element.Container.Fluid>
        );
    }

    return this.merge({
        children: structure
    }, {
        style: {
            margin: '0 auto'
        }
    }, props);
}