import React from 'react';
import { motion } from 'framer-motion';
import { pageOpacityShift } from '../features/transitions/Transitions';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <motion.div
      initial={pageOpacityShift.initial}
      animate={pageOpacityShift.animate}
      exit={pageOpacityShift.exit}
      className=' mx-4 sm:mx-8 2xl:mx-auto max-w-screen-2xl flex flex-col gap-[6rem]'
    >
      <section className='flex flex-col gap-8 justify-center items-center py-10 min-h-[75vh] max-h-[500px] bg-slate-100 '>
        <h1 className='text-2xl font-semibold'>Get in touch with me</h1>

        <form
          onSubmit={handleSubmit}
          className='max-w-xl  w-full rounded-xl bg-white grid gap-8 p-6 py-10'
        >
          <div className='grid xl:grid-cols-2 xl:gap-6'>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='text'
                name='floating_first_name'
                id='floating_first_name'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_first_name'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                First name
              </label>
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='text'
                name='floating_last_name'
                id='floating_last_name'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_last_name'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Last name
              </label>
            </div>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='email'
              name='floating_email'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating_email'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Email address
            </label>
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
              placeholder='Leave a comment...'
            ></textarea>
          </div>

          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
