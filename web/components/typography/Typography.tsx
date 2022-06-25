import React from 'react';

type Props = {
  size?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'display1'
    | 'display2'
    | 'display3'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'button'
    | 'small'
    | 'inherit';
  color?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
  bold?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  role?: string;
};

/**
 * @param size - The size of the text.
 * @param as - The html element to render the text as.
 * @param color - An optional parameter that accepts a color (prefer classes).
 * @returns A text element with the given props.
 */
const Typography = ({
  size = 'body1',
  color,
  as = 'div',
  bold,
  children,
  className,
  onClick,
  role,
}: Props) => {
  const Element = as;
  const classes = {
    display1: `text-5xl md:text-6xl font-bold`,
    display2: `text-4xl md:text-5xl font-bold`,
    display3: `text-3xl md:text-4xl font-bold`,
    h1: `text-3xl md:text-4xl ${bold ? 'font-bold' : 'font-medium'}`,
    h2: `text-xl md:text-2xl   ${bold ? 'font-bold' : 'font-medium'}`,
    h3: `text-lg md:text-xl  ${bold ? 'font-bold' : 'font-medium'}`,
    body1: `text-lg md:text-xl  ${bold ? 'font-medium' : 'font-light'}`,
    body2: `text-base md:text-lg  ${bold ? 'font-medium' : 'font-light'}`,
    body3: `text-base  ${bold ? 'font-medium' : 'font-light'}`,
    caption: `text-xs md:text-sm  ${bold ? 'font-medium' : 'font-light'}`,
    button: `text-base md:text-lg  ${bold ? 'font-medium' : 'font-light'}`,
    small: `text-xs ${bold ? 'font-medium' : 'font-light'}`,
    inherit: '',
  };

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (onClick) onClick(e);
  };

  return (
    <Element
      role={role || 'text'}
      onClick={handleClick}
      className={`${classes[size]} ${className}`}
    >
      {children}
    </Element>
  );
};

export default Typography;
