import { CldImage } from 'next-cloudinary';
import React from 'react';

interface ButtonIconProps {
  iconProps: {
    iconSrc: string;
    iconWidth: number;
    iconHeight: number;
    iconAlt: string;
    isIconPriority?: boolean;
  };
  buttonClassName: string;
  buttonClick: () => void;
}

export default function ButtonIcon({
  iconProps,
  buttonClassName,
  buttonClick,
}: ButtonIconProps) {
  const {
    iconSrc,
    iconWidth,
    iconHeight,
    iconAlt,
    isIconPriority = false,
  } = iconProps;
  return (
    <button onClick={buttonClick} className={buttonClassName}>
      <CldImage
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
        src={iconSrc}
        priority={isIconPriority}
      />
    </button>
  );
}
