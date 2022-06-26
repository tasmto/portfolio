import React from 'react';

type Props = {};

const TextInput = (props: Props) => {
  return (
    <>
      <div className='relative z-0 w-full mb-5'>
        <input
          type='text'
          name='name'
          placeholder=' '
          required
          className='py-4 px-4 bg-white block w-full mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 rounded focus:border-black border-gray-700'
        />
        <label
          htmlFor='name'
          className='absolute duration-300 left-3 top-4 z-10 origin-0  text-gray-600 pointer-events-none'
        >
          Enter name
        </label>
        <span className='text-sm text-red-600 hidden' id='error'>
          Name is required
        </span>
      </div>
    </>
  );
};

export default TextInput;
