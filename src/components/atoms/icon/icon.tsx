'use client';

import { CldImage } from 'next-cloudinary';

interface Props {
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  iconAlt: string;
  isIconPriority?: boolean;
}

export default function Icon(props: Props) {
  const { iconSrc, iconWidth, iconHeight, iconAlt } = props;
  return (
    <CldImage
      alt={iconAlt}
      width={iconWidth}
      height={iconHeight}
      src={iconSrc}
    />
  );
}
