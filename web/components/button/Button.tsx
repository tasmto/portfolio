import Link from 'next/link';

import React, { Children, useRef } from 'react';
import { IconType } from 'react-icons';

type Props = {
  type: 'primary' | 'tertiary' | 'text' | 'text-light';
  size?: 'large' | 'small';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  width?: 'block';
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  href?: string;
  externalLink?: boolean;
  className?: string;
  disabled?: boolean;
};

/**
 *
 * @param param0 {type, size, icon, iconPosition, width, onClick}
 * @returns JSX.Element
 * @description This component is used to create a button.
 * @param onClick is a function that is called when the button is clicked.
 * @param href is the url to redirect to when the button is clicked. (enable externalLink if it is an outside link)
 */
const Button = ({
  disabled,
  onClick,
  href,
  externalLink,
  size,
  icon,
  iconPosition,
  type,
  width,
  children,
  className,
}: Props) => {
  const btn = useRef(null);
  const buttonClasses = `flex flex-wrap items-center gap-2 group tracking-tight font-medium cursor-pointer 
  ${
    size === 'large'
      ? 'px-6 py-3 text-lg'
      : size === 'small'
      ? 'px-3 py-2 text-lg'
      : 'px-2 py-1 text-lg'
  } ${
    type === 'primary'
      ? ` bg-primary-500 text-primary-100 hover:bg-primary-400`
      : type === 'tertiary'
      ? 'bg-primary-100 text-primary-500 hover:bg-primary-200'
      : type === 'text'
      ? 'text-primary-500 hover:text-primary-400'
      : type === 'text-light'
      ? 'text-white hover:text-primary-200'
      : 'text-primary-500 hover:text-primary-400'
  } 
  ${disabled && 'cursor-not-allowed opacity-70'}
 
  ${width === 'block' ? 'w-full justify-center' : 'w-auto'}`;

  const Icon = icon;
  const iconClasses = ` transition-transform ${
    size === 'large' ? 'h-7 w-7' : size === 'small' ? 'h-4 w-4' : 'h-6 w-6'
  }  ${
    iconPosition === 'left'
      ? 'order-first group-hover:translate-x-[-0.5rem]'
      : 'order-last group-hover:translate-x-2'
  }`;

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick !== undefined) onClick(e);
    if (href && externalLink) window.open(href, '_blank');
  };

  if (href && !externalLink) {
    return (
      <Link href={href} as={href}>
        <a ref={btn} className={`${buttonClasses} ${className}`}>
          {Icon && <Icon className={iconClasses} />}
          <span>{children}</span>
        </a>
      </Link>
    );
  }

  if (href && externalLink) {
    return (
      <a
        ref={btn}
        href={href}
        target='_blank'
        rel='noreferrer'
        className={`${buttonClasses} ${className}`}
      >
        {Icon && <Icon className={iconClasses} />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={btn}
      className={`${buttonClasses} ${className}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {Icon && <Icon className={iconClasses} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
