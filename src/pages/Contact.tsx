import React from 'react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className=' mx-4 sm:mx-8 2xl:mx-auto max-w-screen-2xl flex flex-col gap-[6rem]'>
      <section className='flex flex-col gap-8 justify-center items-center py-10 min-h-[75vh] max-h-[500px] bg-slate-100 '>
        <h1 className='text-2xl font-semibold'>Get in touch with me</h1>

        <form
          onSubmit={handleSubmit}
          className='max-w-xl  w-full rounded-xl bg-white grid gap-8 p-6 py-10'
        >
          <label className='text-lg font-medium  relative cursor-pointer'>
            <span className='absolute z-10 bottom-[80%] left-10 '>
              Enter your email
            </span>
            <input
              className='w-full px-10 py-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded-full 
              focus:border-cyan-900 focus:mt-4 transition-all'
              type='text'
              placeholder='Email'
              id=''
            />
          </label>

          <button className='text-2xl font-semibold text-cyan-500 hover:text-cyan-700'>
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
