import React from 'react';
import {
    UX2
} from '@wsb/guac-widget-core';
import cardTypes from '../../../../constants/commerceCardTypes';

export function CommerceCardPriceDisplay({
    price,
    salePrice,
    cardType,
    priceText,
    duration,
    dataAids = {},
    isLinkShown,
    isPriceFeatured,
    styles: componentStyles,
    ...props
}) {
    const priceStateProps = salePrice && {
        priceState: 'expired'
    };
    const originalStyles = (!isPriceFeatured && salePrice) ?
        {
            color: 'neutral'
        } :
        {};

    const styles = {
        container: {
            'display': 'flex',
            'justifyContent': cardType === cardTypes.MAJOR ? 'center' : 'flex-start',
            'marginBottom': isLinkShown ? 'xxsmall' : 0,
            '@sm': {
                marginBottom: isLinkShown ? 'xsmall' : 0,
                justifyContent: (cardType === cardTypes.MAJOR || cardType === cardTypes.MEDIUM) ?
                    'center' :
                    'flex-start'
            },
            ...componentStyles
        },
        duration: {
            'display': 'inline-block',
            ':after': {
                content: `"|"`,
                marginHorizontal: 'xsmall'
            }
        },
        range: {
            display: 'inline-block',
            marginRight: 'xsmall'
        },
        original: {
            display: 'inline-block',
            fontWeight: (isPriceFeatured && !salePrice) ? 'bold' : 'normal',
            ...originalStyles
        },
        sale: {
            display: 'inline-block',
            marginLeft: 'xsmall',
            fontWeight: isPriceFeatured ? 'bold' : 'normal'
        }
    };

    const content = ( <
        UX2.Element.Block active style = {
            styles.container
        } >
        {
            duration &&
            ( <
                UX2.Element.Price children = {
                    duration
                }
                featured style = {
                    styles.duration
                }
                />
            )
        } {
            priceText &&
                ( <
                    UX2.Element.Price children = {
                        priceText
                    }
                    featured style = {
                        styles.range
                    }
                    />
                )
        } <
        UX2.Element.Price key = 'original'
        data - aid = {
            dataAids.price
        }
        style = {
            styles.original
        } { ...priceStateProps
        }
        children = {
            price
        }
        /> {
            salePrice &&
                <
                UX2.Element.Price
            key = 'sale'
            data - aid = {
                dataAids.salePrice
            }
            style = {
                styles.sale
            }
            children = {
                salePrice
            }
            />
        } <
        /UX2.Element.Block>
    );

    return this.merge({
        children: content
    }, props);
}