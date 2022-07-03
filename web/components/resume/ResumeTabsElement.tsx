import { useState } from 'react';
import { IoDownloadOutline } from 'react-icons/io5';
import Button from '../button/Button';
import Typography from '../typography/Typography';

type Props = {};

const ResumeTabsElement = (props: Props) => {
  const resumeContent = [
    {
      title: 'Front-End Developer',
      company: 'Future Agent',
      startDate: '2021',
      endDate: 'Current',
      description: [
        'Responsible for leading and structuring development processes and roadmaps for our C2C (Customer-to-Customer) application.',
        'Personally responsible for the design and current co-development of our C2C application.',
        'Introduced and currently solely responsible for managing our React and design component libraries.',
        'Created and currently responsible for overseeing the brand design system and guidelines.',
        'Main technology researcher and helping implement technologies (like React Native) for our products.',
      ],
    },
    {
      title: 'Web Developer and Designer',
      company: 'Beyond Architecture Real Estate',
      startDate: '2021',
      endDate: '2022',
      description: [
        'Establishing processes through the integration and sometimes development of technologies that help the business scale. For example, a custom client facing property lifestyle calculator that helps potential property buyers see properties they can afford and provides step-by-step help in getting bonds, calculating transfer costs, etc.',
        "As the only developer on the team, I develop and/or integrate all the business' digital tools. For example integrating the website forms and analytics with the CRM (Customer Relations Manager) software.",
        'Required to provide training and technical support for different teams and departments across the company.',
        'Responsible for creating and maintaining our design system for our marketing and technology departments. ',
      ],
    },
    {
      title: 'Learning Technologist Tech Lead',
      company: 'Construct Education',
      startDate: '2021',
      endDate: '2021',
      description: [
        'Introduced and integrated a new atomic approach of creating CSS class and attribute based custom components in Canvas LMS (one of our main learning management platforms) through libraries like Tailwind CSS, Material-UI, etc.',
        "Took over managing, cataloging and integrating LTI's (Learning Tool Interoperability) across our Canvas instance and select clients' instances.",
        'Responsible for providing Canvas LMS technical support to our learning design and technology teams.',
        'Assisted with on-boarding and training the Canvas helpdesk support team (30 people) and learning designers with learning Canvas.',
        'Supported our sales and project management teams with creating a client quoting framework for Canvas LMS courses.',
      ],
    },
    {
      title: 'Learning Technologist',
      company: 'Construct Education',
      startDate: '2019',
      endDate: '2020',
      description: [
        'Successfully & consistently developed and launched multiple online courses within the given timelines & budgets.',
        'Required to develop course design ideas and concepts from our designers in high-pressure, time-sensitive briefs.',
        'Worked directly with our partner institutions, providing technical support to their lecturers and staff. Most notably worked directly with the Saïd Business School in Oxford and the Ross Business School in Michigan, especially at the beginning of the pandemic.',
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='grid grid-cols-5 gap-3 w-full content-stretch'>
      <aside
        aria-controls='cv-content'
        className='p-7 pt-10 self-stretch bg-gradient-to-br rounded-l-xl from-primary-50 to-primary-100/70  grid gap-5 col-span-2'
      >
        <Typography as='p' size='caption' className='text-gray-600'>
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
              type={index === activeTab ? 'primary' : 'tertiary'}
              size='small'
              className='flex flex-col gap-0 text-start !items-start rounded-l-xl'
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
          className='text-gray-700 mt-3 text-start'
          icon={IoDownloadOutline}
          iconPosition='left'
          href='/Tashinga-Mtoko-Frontend-Developer-CV.pdf'
          download
        >
          Download a full PDF version <span className='sr-only'>of my CV</span>
        </Button>
      </aside>
      <article
        id='cv-content'
        className='p-6 py-10 bg-gradient-to-tr rounded-r-xl from-tertiary-100 to-tertiary-200  col-span-3 h-full flex flex-col items-start justify-center self-stretch text-gray-800'
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
              <Typography as='span' size='body3'>
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
