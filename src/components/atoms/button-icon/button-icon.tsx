import { CldImage } from 'next-cloudinary';

interface ButtonIconProps {
  iconProps: {
    iconSrc: string;
    iconWidth: number;
    iconHeight: number;
    iconAlt: string;
    isIconPriority?: boolean;
  };
  buttonType?: 'submit' | 'reset' | 'button';
  buttonClassName: string;
  buttonClick: () => void;
}

export default function ButtonIcon({
  iconProps,
  buttonClassName,
  buttonClick,
  buttonType,
}: ButtonIconProps) {
  const {
    iconSrc,
    iconWidth,
    iconHeight,
    iconAlt,
    isIconPriority = false,
  } = iconProps;
  return (
    <button
      data-testid='search-button'
      aria-label='Presiona para buscar'
      onClick={buttonClick}
      className={buttonClassName}
      type={buttonType}
    >
      <CldImage
        aria-hidden='true'
        alt=''
        width={iconWidth}
        height={iconHeight}
        src={iconSrc}
        priority={isIconPriority}
      />
    </button>
  );
}
