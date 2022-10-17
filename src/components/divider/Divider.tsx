type Props = {
  type?: 'solid' | 'dashed' | 'dotted'
  prominent?: boolean
  className?: string
}

/**
 *
 * @returns A styled divider component (hr)
 */
const Divider = ({ type, prominent, className }: Props) => {
  return (
    <hr
      className={`shrink w-full  ${
        prominent ? 'opacity-90  border-t-4' : 'opacity-30  border-t-2'
      } ${
        type === 'dotted'
          ? 'border-dotted'
          : type === 'dashed'
          ? 'border-dashed'
          : 'border-solid'
      } ${className ? className : ''}`}
    />
  )
}

export default Divider
