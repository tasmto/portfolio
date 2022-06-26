import React, { useState } from 'react';
import Button from '../button/Button';
import TextArea from '../form/TextArea';
import TextInput from '../form/TextInput';
import { IoSend } from 'react-icons/io5';
import { useForm, ValidationError } from '@formspree/react';
import Typography from '../typography/Typography';

type Props = {};

const ContactForm = (props: Props) => {
  const [state, handleSubmit] = useForm('mbjwezkz');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (state.succeeded)
    return (
      <div className='grid gap-3 text-gray-600 py-8 px-5 border-2 border-slate-300 border-dashed bg-slate-50 justify-center content-center'>
        <Typography as={'h3'} size='display2' className='tracking-tighter'>
          Thanks you so much for reaching out!
        </Typography>
        <Typography as={'p'} size='body1'>
          I will be in touch as soon as I can.
        </Typography>
      </div>
    );
  else
    return (
      <form method='POST' onSubmit={handleSubmit}>
        <TextInput
          label='What is your name?'
          onChange={handleChange}
          name='name'
          value={formData.name}
          required
        />
        <ValidationError prefix='Name' field='name' errors={state.errors} />
        <TextInput
          label='What is your email?'
          onChange={handleChange}
          name='email'
          value={formData.email}
          required
          type='email'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <TextArea
          label='What do you want to talk about?'
          onChange={handleChange}
          name='message'
          value={formData.message}
          required
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <Button
          disabled={
            formData.email === '' ||
            formData.name === '' ||
            formData.message === ''
          }
          size='large'
          type='primary'
          width='block'
          icon={IoSend}
          className='mt-8'
        >
          {state.submitting ? 'Loading' : 'Send'}
        </Button>
      </form>
    );
};

export default ContactForm;
