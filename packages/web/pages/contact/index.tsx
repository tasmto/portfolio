import Image from 'next/image'
import React from 'react'
import ContactForm from '../../features/forms/components/ContactForm'
import Typography from '../../components/typography/Typography'
import Layout from '../../components/Layout'

type Props = {}

const index = (props: Props) => {
  return (
    <Layout>
      <div className='max-w-[100vw] grid gap-12 md:gap-24 mt-16 md:mt-32 relative'>
        <section
          className='container-1 w-full grid gap-4 gap-y-8 md:grid-cols-2'
          id='contact'
        >
          <div className='grid gap-3 content-start'>
            <Typography size='display1' as='h2' className='text-slate-700'>
              Get in touch.
            </Typography>
            <Typography size='body2' className='max-w-[30rem]'>
              I recommend using any of the social media/ avenues below but feel
              free to fill in the form as well :)
            </Typography>
            <ul className='flex gap-5 mt-3 md:mt-5'>
              <li>
                <a
                  href='https://github.com/tasmto'
                  target='_blank'
                  rel='noreferrer'
                  title='Visit my github profile'
                >
                  <Image
                    src='/icons/Github-icon.png'
                    width={65}
                    height={65}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/tasmto/'
                  target='_blank'
                  rel='noreferrer'
                  title='Visit my Linkedin profile'
                >
                  <Image
                    src='/icons/Linkedin-icon.png'
                    width={65}
                    height={65}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a
                  href='mailto:mtokotashinga@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  title='Email me'
                >
                  <Image
                    src='/icons/Gmail-icon.png'
                    width={65}
                    height={65}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://dribbble.com/tasmto'
                  target='_blank'
                  rel='noreferrer'
                  title='Visit my Dribble profile'
                >
                  <Image
                    src='/icons/Dribbble-icon.png'
                    width={65}
                    height={65}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://wa.link/rab693'
                  target='_blank'
                  rel='noreferrer'
                  title='send me a WhatsApp message'
                >
                  <Image
                    src='/icons/Whatsapp-icon.png'
                    width={65}
                    height={65}
                    layout='intrinsic'
                    className='object-contain w-14 h-14'
                    alt=''
                  />
                </a>
              </li>
            </ul>
            <Typography size='body3' as='p' className='flex gap-0 items-center'>
              <a
                href='https://harnoorbhullar.com/resources/'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                * Icons by Harnoor Bhullar.
              </a>
            </Typography>
          </div>
          <ContactForm />
        </section>
      </div>
    </Layout>
  )
}

export default index
