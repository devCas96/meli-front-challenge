import { ButtonTypes } from '@/constants/globals';
import { CldImage } from 'next-cloudinary';

interface Props {
  buttonProps: {
    type?: ButtonTypes.BUTTON | ButtonTypes.RESET | ButtonTypes.SUBMIT;
    className: string;
    onClick: () => void;
    testId: string;
    ariaLabel: string;
  };
  iconProps: {
    iconSrc: string;
    iconWidth: number;
    iconHeight: number;
    iconAlt: string;
    isIconPriority?: boolean;
  };
}

export default function ButtonIcon(props: Props) {
  const { buttonProps, iconProps } = props;

  const { onClick, className, type, testId, ariaLabel } = buttonProps;

  const { iconSrc, iconWidth, iconHeight, isIconPriority = false } = iconProps;

  return (
    <button
      data-testid={testId}
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
      type={type}
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
