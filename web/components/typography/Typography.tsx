import React from 'react';

type Props = {
  size?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'display-1'
    | 'display-2'
    | 'display-3'
    | 'display-4'
    | 'body'
    | 'caption'
    | 'button'
    | 'small'
    | 'inherit';
  color?: string;
  children?: React.ReactNode;
  component?: React.ElementType;
};

const Typography = ({
  size = 'p',
  color,
  component = 'p',
  children,
}: Props) => {
  const Element = component;
  return <Element>{children}</Element>;
};

export default Typography;
