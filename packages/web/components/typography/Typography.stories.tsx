import React from 'react';
import Divider from '../divider/Divider';

type Props = {};
//  todo: Make this actually work

const Type = (props: Props) => {
  return (
    <div className='grid gap-6'>
      <h1 className='text-5xl md:text-6xl font-bold'>Display 1</h1>
      <h1 className='text-4xl md:text-5xl font-bold'>Display 2</h1>
      <h1 className='text-3xl md:text-4xl font-bold'>Display 3</h1>
      <Divider />
      <h2 className='text-3xl md:text-4xl font-medium'>H1</h2>
      <h2 className='text-xl md:text-2xl font-medium'>H2</h2>
      <h2 className='text-lg md:text-xl font-medium'>H3</h2>
      <Divider />
      <p className='text-lg md:text-xl'>body</p>
      <p className='text-base md:text-lg'>body2</p>
      <p className='text-base'>body3</p>
      <Divider />
      <p className='text-xs md:text-sm'>caption</p>
      <p className='text-base md:text-lg font-medium'>button</p>
      <p className='text-xs'>small</p>
      <p>inherit</p>
    </div>
  );
};

export default Type;
