import React from 'react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className=' mx-4 sm:mx-8 2xl:mx-auto max-w-screen-2xl flex flex-col gap-[6rem]'>
      <section className='flex flex-col gap-8 justify-center items-center py-10 min-h-[75vh] bg-slate-100 '>
        <h1 className='text-2xl font-semibold'>Get in touch with me</h1>

        <form
          onSubmit={handleSubmit}
          className='max-w-xl min-w-[40vw] w-full rounded-xl bg-white grid gap-4 p-6 py-10'
        >
          <div>
            <input
              className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded-full '
              type='text'
              placeholder='Email'
            />
          </div>

          <button className='w-full rounded-full py-4 bg-blue-600 hover:bg-blue-700  text-sm font-bold text-gray-50 transition duration-200'>
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
