import { useState } from 'react';
import { IoDownloadOutline } from 'react-icons/io5';

import Button from '@/components/button/Button';
import Typography from '@/components/typography/Typography';

type Props = {};

const ResumeTabsElement = (props: Props) => {
  const resumeContent = [
    {
      title: 'Full-Stack Developer',
      company: 'Warp Development',
      startDate: 'Sept 2022',
      endDate: 'Present',
      description: [
        'Solely led development and maintenance of two React sites, a React Native app, an Electron desktop app, and two .NET backends.',
        'Optimised image processing, improving photo processing speeds from 4 images per minute to 17 images per minute per virtual machine, all while maintaining the existing costs and the infrastructure setup.',
        'Successfully overhauled previously unreliable and bug-prone Stripe, PayPal, and Paygate payment gateway integrations across the entire product platform. This resulted in greater platform reliability and eliminated customer complaints and frustrations regarding inaccurate payment reporting and unprocessed customer payments. ...',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Future Agent ',
      startDate: 'Aug 2021',
      endDate: 'Aug 2022',
      description: [
        'Led the development of our home seller-to-buyer mobile application and buyer-to-seller web app, using React Native, Next js with TRPC and Postgres SQL.',
        "Designed and maintained the company's design system within Figma, integrating it with React component libraries in Storybook to ensure consistency and efficiency in our UI/UX design and development workflows.",
        "Helped lead the technical planning sessions to align business objectives with the development side, ensuring a coherent roadmap for during the products' development.",
      ],
    },
    {
      title: 'Web Developer and Designer',
      company: 'Beyond Architecture Real Estate',
      startDate: 'Nov 2021',
      endDate: 'Jun 2022',
      description: [
        "Soley led the development of the company's marketing website and real estate advertising platform, ensuring seamless integration with their existing realtor platforms. Additionally, developed internal tools to help improve workflows between the sales team and the realtors.",
        "Created and maintained the company's design and brand guidelines, ensuring consistency across their marketing channels (including social media and physical media).",
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='grid grid-cols-5 gap-3 w-full content-stretch'>
      <aside
        aria-controls='cv-content'
        className='p-7 pt-10 self-stretch bg-gradient-to-br rounded-l-2xl from-slate-900/90 to-slate-800 border border-slate-300 grid gap-5 col-span-2  text-slate-100 '
      >
        <Typography as='p' size='caption'>
          * Click on any of the tabs below to view a breakdown
        </Typography>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col gap-1'
        >
          {resumeContent.map((content, index) => (
            <Button
              onClick={() => setActiveTab(index)}
              data-id={index}
              key={index}
              type='primary'
              size='small'
              className={`flex flex-col gap-0 text-start !items-start rounded-l-xl rounded-r-none border border-slate-600 ${
                index !== activeTab &&
                'bg-slate-700 !text-slate-200 hover:bg-slate-600 border-slate-700'
              }`}
            >
              <Typography as='span' size='caption'>
                {content.company} | {content.startDate} - {content.endDate}
              </Typography>
              <Typography as='p' size='body1'>
                {content.title}
              </Typography>
            </Button>
          ))}
        </form>
        <Button
          type='text'
          className='mt-3 text-start  text-slate-100 '
          icon={IoDownloadOutline}
          iconPosition='left'
          href='https://github.com/tasmto/tasmto/releases/download/1.0/Tashinga.Mtoko.CV.pdf'
          download
        >
          Download a full PDF version <span className='sr-only'>of my CV</span>
        </Button>
      </aside>
      <article
        id='cv-content'
        className='p-6 py-10 rounded-r-2xl bg-gray-200  bg-gradient-to-tr  from-slate-200/70 to-slate-100 text-slate-700  col-span-3 h-full flex flex-col items-start justify-center self-stretch border border-slate-200'
      >
        <Typography as='p' size='body1'>
          {resumeContent[activeTab].startDate}
          {' - '}
          {resumeContent[activeTab].endDate}
        </Typography>
        <Typography as='h2' size='h2'>
          {resumeContent[activeTab].company}
          {' - '}
          {resumeContent[activeTab].title}
        </Typography>
        <ul className='mt-3 list-disc ml-6'>
          {resumeContent[activeTab].description.map((item, index) => (
            <li key={index}>
              <Typography as='span' size='body2'>
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default ResumeTabsElement;
