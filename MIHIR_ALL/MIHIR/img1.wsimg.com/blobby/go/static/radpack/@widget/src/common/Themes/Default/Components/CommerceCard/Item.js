import React, { Fragment } from "react";
import { UX2 } from "@wsb/guac-widget-core";

export function CommerceCardItem({
  name,
  duration,
  price,
  imageUrl,
  ribbonText,
  cardSize,
  imageShape,
  imageCropMethod,
  hasImageBorder,
  productType,
  isBoxed,
  style,
  eyebrowText,
  footerText,
  footerAlert,
  eventDate,
  buttonText,
  priceText,
  salePrice,
  ratings,
  dataAids,
  dataRoutes,
  ...props
}) {
  const WrapperComponent = isBoxed ? UX2.Group.Card.Link : Fragment;
  const wrapperProps = isBoxed && {
    style: {
      flexGrow: 1,
    },
  };
  const commonStyles = {
    cursor: "pointer",
    ...style,
  };
  const componentStyle = isBoxed
    ? {
        display: "flex",
        height: "100%",
        ...commonStyles,
      }
    : {
        ...commonStyles,
      };

  const hasImage = Boolean(imageUrl);

  const contentProps = {
    name,
    duration,
    price,
    productType,
    isBoxed,
    hasImage,
    eyebrowText,
    footerText,
    footerAlert,
    eventDate,
    buttonText,
    priceText,
    salePrice,
    dataAids,
    dataRoutes,
    ratings,
    titleProps: {
      align: !hasImage && isBoxed ? "center" : "left",
    },
    isPriceShown: true,
  };

  const content = (
    <WrapperComponent {...wrapperProps}>
      <UX2.Group.CommerceItem>
        {" "}
        {hasImage && (
          <UX2.Component.CommerceCardPictureContainer
            imageShape={imageShape}
            containerStyles={{
              marginBottom: "small",
            }}
            canHaveBorder={!isBoxed}
            hasImageBorder={hasImageBorder}
          >
            <>
              <UX2.Component.CommerceCardPicture
                assetUrl={imageUrl}
                imageCropMethod={imageCropMethod}
                dataAids={dataAids}
              />{" "}
              {ribbonText && (
                <UX2.Component.CommerceCardRibbon
                  dataAids={dataAids}
                  cardSize={cardSize}
                >
                  {ribbonText}{" "}
                </UX2.Component.CommerceCardRibbon>
              )}{" "}
            </>{" "}
          </UX2.Component.CommerceCardPictureContainer>
        )}{" "}
        <UX2.Component.CommerceCardContent {...contentProps} />{" "}
      </UX2.Group.CommerceItem>{" "}
    </WrapperComponent>
  );

  return this.merge(
    {
      children: content,
      style: componentStyle,
    },
    props
  );
}
