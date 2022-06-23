import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  text: string;
  type: 'primary' | 'secondary' | 'text';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  iconSize?: 'large' | 'small';
  width?: 'block';
  onClick?: () => void;
};

const Button = ({
  onClick,
  text,
  icon,
  iconPosition,
  iconSize,
  type,
}: Props) => {
  return (
    type === 'primary' && (
      <a
        className='px-3 py-2 bg-primary-100 text-primary-500 flex items-center gap-2 text-lg tracking-tight font-medium'
        onClick={onClick}
      >
        <span>
          {icon && iconPosition === 'left' && icon}
          <span>Button 1</span>
        </span>
      </a>
    )
  );
};

export default Button;
