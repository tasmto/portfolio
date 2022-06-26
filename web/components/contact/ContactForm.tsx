import React from 'react';
import TextInput from '../form/TextInput';

type Props = {};

const ContactForm = (props: Props) => {
  const handleContactFormSubmit = () => {
    console.log('submitted');
  };
  return (
    <form onSubmit={handleContactFormSubmit}>
      <TextInput />
    </form>
  );
};

export default ContactForm;
