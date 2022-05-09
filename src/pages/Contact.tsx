import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageOpacityShift } from '../features/transitions/Transitions';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
  });
  const onMutate = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) =>
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
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
      <section className='flex flex-col gap-8 justify-center items-center py-10  bg-slate-100 '>
        <h1 className='text-2xl sm:text-3xl font-semibold'>
          Get in touch with me
        </h1>

        <form
          name='contact'
          // @ts-ignore: Type '{ children: Element[]; name: string; netlify: true; "netlify-honeypot": string; method: string;
          netlify
          netlify-honeypot='bot-field'
          method='post'
          className='max-w-xl  w-full rounded-xl bg-white grid gap-8 p-6 py-10 mx-2'
        >
          <div className='grid sm:grid-cols-2 gap-8 sm:gap-6'>
            <div className='relative z-0 w-full mb-6 group col-span-1'>
              <input
                type='text'
                name='name'
                id='name'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-600 peer'
                placeholder=' '
                required
                value={formData.name}
                onChange={onMutate}
              />
              <label
                htmlFor='name'
                className='peer-focus:font-medium absolute text-sm  text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Your first name
              </label>
            </div>
            <div className='relative z-0 w-full mb-6 group col-span-1'>
              <input
                type='text'
                name='surname'
                id='surname'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-600 peer'
                placeholder=' '
                required
                value={formData.surname}
                onChange={onMutate}
              />
              <label
                htmlFor='surname'
                className='peer-focus:font-medium absolute text-sm  text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Your last name
              </label>
            </div>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='email'
              name='email'
              id='email'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-600 peer'
              placeholder=' '
              required
              value={formData.email}
              onChange={onMutate}
            />
            <label
              htmlFor='email'
              className='peer-focus:font-medium absolute text-sm  text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
            >
              Your email address
            </label>
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label
              htmlFor='message'
              className='peer-focus:font-medium text-sm  text-gray-900 duration-300 mb-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500  '
            >
              What did you want to talk about?
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='block p-2.5 w-full text-sm text-gray-900 bg-transparent border-2 rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-600 peer'
              placeholder='Leave a comment...'
              value={formData.message}
              onChange={onMutate}
            ></textarea>
          </div>
          <input
            type='hidden'
            name='form-name'
            className='hidden'
            value='contact'
            disabled={true}
          />

          <button
            type='submit'
            className='text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
          >
            Submit
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
