'use client';

import { CldImage } from 'next-cloudinary';

interface IconProps {
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  iconAlt: string;
  isIconPriority?: boolean;
}

export default function Icon({
  iconSrc,
  iconWidth,
  iconHeight,
  iconAlt,
}: IconProps) {
  return (
    <CldImage
      alt={iconAlt}
      width={iconWidth}
      height={iconHeight}
      src={iconSrc}
    />
  );
}
