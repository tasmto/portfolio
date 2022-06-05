import React, { Profiler } from 'react';
import SkillsIcons from '../features/skillsBlocks/SkillsIcons';
import { motion } from 'framer-motion';
import { pageOpacityShift } from '../features/transitions/Transitions';

import PortfolioGrid from '../features/portfolio/PortfolioGrid';

const Resume = () => {
  return (
    <motion.div
      initial={pageOpacityShift.initial}
      animate={pageOpacityShift.animate}
      exit={pageOpacityShift.exit}
      className=' mx-4  sm:mx-8 xl:mx-auto max-w-screen-xl flex flex-col gap-[6rem]'
    >
      <section className=' flex flex-col gap-8 pt-10  '>
        <h1 className='text-2xl font-semibold'>
          I'm currently woking as a frontend developer at Future Agent.
        </h1>
        <div className='grid grid-cols-10 col-span-2 gap-4 sm:gap-6'>
          <p className='text-xl font-medium col-span-10 sm:col-span-2'>
            What I'm good at:
          </p>
          <SkillsIcons layout='sm:gap-6 col-span-10' />
        </div>
      </section>
      <section className='grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 col-span-1 gap-10 sm:gap-14'>
        <article className='grid gap-8 content-start'>
          <h2
            className='text-2xl font-semibold sticky z-10 top-0 pl-10 translate-x-[-2.5rem]  py-4 bg-white/80 dark:bg-slate-700/90 shadow rounded-2xl'
            style={{ backdropFilter: 'blur(5px)' }}
          >
            Working Experience
          </h2>
          <article className='grid gap-4'>
            <div className='flex flex-col-reverse gap-2'>
              <h3 className='text-xl font-medium'>
                Future Agent - Front-End Developer
              </h3>
              <h5 className='text-md font-medium'>2021 - Current</h5>
            </div>
            <ul className='list-disc'>
              <li>
                Responsible for leading and structuring development processes
                and roadmaps for our C2C (Customer-to-Customer) application.
              </li>
              <li>
                Personally responsible for the design and current co-development
                of our C2C application.
              </li>
              <li>
                Introduced and currently responsible for managing our React and
                design component libraries.
              </li>
              <li>
                Created and currently responsible for overseeing the brand
                design system and guidelines.
              </li>
              <li>
                Helping research and implement technologies (like React Native)
                for our products.
              </li>
            </ul>
          </article>
          <article className='grid gap-4'>
            <div className='flex flex-col-reverse gap-2'>
              <h3 className='text-xl font-medium'>
                Beyond Architecture Real Estate - Web Developer and Designer
              </h3>
              <h5 className='text-md font-medium'>
                2021 - Current (Part-time)
              </h5>
            </div>
            <ul className='list-disc'>
              <li>
                Establishing processes through the integration and sometimes
                development of technologies that help the business scale.
              </li>
              <li>
                As the only developer on the team, I develop and/or integrate
                all the business' digital tools. For example integrating the
                website forms and analytics with the CRM (Customer Relations
                Manager) software.
              </li>
              <li>
                Required to provide training and technical support for different
                teams and departments across the company.
              </li>
              <li>
                Responsible for creating our design system for our marketing
                departments.
              </li>
            </ul>
          </article>
          <article className='grid gap-4'>
            <div className='flex flex-col-reverse gap-2'>
              <h3 className='text-xl font-medium'>
                Construct Education - Learning Technologist Tech Lead
              </h3>
              <h5 className='text-md font-medium'>2021</h5>
            </div>
            <ul className='list-disc'>
              <li>
                Introduced and integrated a new atomic approach of creating CSS
                class and attribute based custom components in Canvas LMS (one
                of our main learning management platforms) through libraries
                like Tailwind CSS, Material-UI, etc.{' '}
              </li>
              <li>
                Took over managing, cataloging and integrating LTI’s (Learning
                Tool Interoperability) across our Canvas instance and select
                clients’ instances.
              </li>
              <li>
                Responsible for providing Canvas LMS technical support to our
                learning design and technology teams.
              </li>
              <li>
                Assisted with on-boarding and training the Canvas helpdesk
                support team (30 people) and learning designers with learning
                Canvas.
              </li>
              <li>
                Supported our sales and project management teams with creating a
                client quoting framework for Canvas LMS courses.
              </li>
            </ul>
          </article>
          <article className='grid gap-4'>
            <div className='flex flex-col-reverse gap-2'>
              <h3 className='text-xl font-medium'>
                Construct Education - Learning Technologist
              </h3>
              <h5 className='text-md font-medium'>2019 - 2020</h5>
            </div>
            <ul className='list-disc'>
              <li>
                Successfully & consistently developed and launched multiple
                online courses within the given timelines & budgets.
              </li>
              <li>
                Required to develop course design ideas and concepts from our
                designers in high-pressure, time-sensitive briefs.
              </li>
              <li>
                Worked directly with our partner institutions, providing
                technical support to their lecturers and staff. Most notably
                worked directly with the Saïd Business School in Oxford and the
                Ross Business School in Michigan, especially at the beginning of
                the pandemic.
              </li>
            </ul>
          </article>
          <article className='grid gap-4'>
            <div className='flex flex-col-reverse gap-2'>
              <h3 className='text-xl font-medium'>
                Leto - Designer/ Developer
              </h3>
              <h5 className='text-md font-medium'>2019 - 2021</h5>
            </div>
            <ul className='list-disc'>
              <li>
                Successfully helped conceptualize and develop online stores and
                websites for our clients.
              </li>
              <li>
                Provided technical and creative direction for our clients in
                helping them establish their online presences.
              </li>
              <li>
                Helped a number of businesses migrate their businesses and
                products online during the start of the pandemic.
              </li>
              <li>
                Provided technical support and developed business optimization
                solutions for our clients. A notable example is a bulk WhatsApp
                message sender and scheduler solution for a client who had been
                sending messages manually.
              </li>
            </ul>
          </article>
          <article className='grid gap-4'>
            <div className='flex flex-col-reverse gap-2'>
              <h3 className='text-xl font-medium'>
                Beauty Bulletin - Community Manager & Junior Designer
              </h3>
              <h5 className='text-md font-medium'>2019 - 2021</h5>
            </div>
            <ul className='list-disc'>
              <li>
                Responsible for managing our social platforms and our Jumla
                powered online platform of 200 000+ members.
              </li>
              <li>
                Collaborated with key stakeholders on our team to design
                marketing material for our clients’ campaigns and our websites.
              </li>
              <li>
                Assisted the video editor and designer with creating and editing
                video content, motion graphics animations and graphic design
                banners.
              </li>
              <li>
                Responsible for connecting with and managing all of our
                influencers, especially during campaigns.
              </li>
              <li>
                Notable clients include Unilever, Johnson and Johnson, Dove,
                Colgate, Avon, Vaseline and Batiste.
              </li>
            </ul>
          </article>
          <article className='grid gap-4'>
            <div className='flex flex-col-reverse gap-2'>
              <h3 className='text-xl font-medium'>
                Monetise/ Brand Commerce - Digital Marketing Assistant
              </h3>
              <h5 className='text-md font-medium'>2019 - 2021</h5>
            </div>
            <ul className='list-disc'>
              <li>
                Supported our graphic designer by creating banners, product
                photography and motion graphics for our social media accounts
                and our clients' e-commerce stores.
              </li>
              <li>
                Provided design and minor development assistance to the
                developers on client websites and e-commerce stores.
              </li>
              <li>
                Notable clients include Clarisonic (L'Oréal), Shoetopia (Fitflop
                SA), Watch Finder and Green Cross.
              </li>
            </ul>
          </article>
        </article>
        <div className='grid gap-16 content-start'>
          <article className='grid gap-8'>
            <h2
              className='text-2xl font-semibold sticky z-10 top-0 pl-10 translate-x-[-2.5rem] py-4 bg-white/80 dark:bg-slate-700/90 shadow rounded-2xl'
              style={{ backdropFilter: 'blur(5px)' }}
            >
              Contact Info
            </h2>
            <ul className='grid gap-4'>
              <li className='hidden print:block text-xl font-medium'>
                Name: Tashinga Mtoko
              </li>
              <li className='text-xl font-medium'>
                Email:{' '}
                <a
                  href='mailto:mtokotashinga@gmail.com'
                  target='_blank'
                  rel='no-referer'
                  className='sup hover:text-cyan-700 text-cyan-500'
                >
                  mtokotashinga@gmail.com
                </a>
              </li>
              {/* <li className='text-xl font-medium'>WhatsApp: Click to Reveal</li> */}
              <li className='text-xl font-medium'>
                LinkedIn:{' '}
                <a
                  href='https://www.linkedin.com/in/tasmto/'
                  target='_blank'
                  rel='no-referer'
                  className='sup hover:text-cyan-700 text-cyan-500'
                >
                  @tasmto
                </a>
              </li>
              <li className='text-xl font-medium'>
                Github:{' '}
                <a
                  href='https://github.com/tasmto'
                  target='_blank'
                  rel='no-referer'
                  className='sup hover:text-cyan-700 text-cyan-500'
                >
                  @tasmto
                </a>
              </li>
              <li className='text-xl font-medium'>
                @tasmto (on all social media platforms)
              </li>
            </ul>
          </article>
          <article className='grid gap-8'>
            <h2
              className='text-2xl font-semibold sticky z-10 top-0 pl-10 translate-x-[-2.5rem]  py-4 bg-white/80 dark:bg-slate-700/90 shadow rounded-2xl'
              style={{ backdropFilter: 'blur(5px)' }}
            >
              Educational History
            </h2>
            <div className='grid gap-6'>
              <div className='flex flex-col-reverse gap-2'>
                <h3 className='text-xl font-medium'>
                  Higher certificate in Web Design and Web Development at the
                  Academy of Digital Arts
                </h3>
                <h5 className='text-md font-medium'>2020</h5>
              </div>
              <div className='flex flex-col-reverse gap-2'>
                <h3 className='text-xl font-medium'>
                  Higher certificate in New Media Development at CityVarsity.
                </h3>
                <h5 className='text-md font-medium'>2019</h5>
              </div>
              <div className='flex flex-col-reverse gap-2'>
                <h3 className='text-xl font-medium'>
                  Graduated from Milnerton High School.
                </h3>
                <h5 className='text-md font-medium'>2017</h5>
              </div>
            </div>
          </article>
          <article className='grid gap-8'>
            <h2
              className='text-2xl font-semibold sticky z-10 top-0 pl-10 translate-x-[-2.5rem]  py-4 bg-white/80 dark:bg-slate-700/90 shadow rounded-2xl'
              style={{ backdropFilter: 'blur(5px)' }}
            >
              Languages and Frameworks
            </h2>

            <p>
              React.js | TypeScript | Node.js | Mongo DB | Gatsby.js |
              JavaScript | HTML | CSS | Git/ GitHub | Tailwind | Bootstrap &
              AMP.
            </p>
          </article>
          <article className='grid gap-8'>
            <h2
              className='text-2xl font-semibold sticky z-10 top-0 pl-10 translate-x-[-2.5rem]  py-4 bg-white/80 dark:bg-slate-700/90 shadow rounded-2xl'
              style={{ backdropFilter: 'blur(5px)' }}
            >
              Technical and Software Skills
            </h2>

            <p>
              Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects, Figma,
              Sketch, WebFlow, WordPress, Articulate Suite, Canvas LMS, Moodle
              LMS, Shopify, Survey Monkey, Qualtrics, VS Code.
            </p>
          </article>
          <article className='grid gap-8 print:hidden'>
            <h2
              className='text-2xl font-semibold sticky z-10 top-0 pl-10 translate-x-[-2.5rem]  py-4 bg-white/80 dark:bg-slate-700/90 shadow rounded-2xl'
              style={{ backdropFilter: 'blur(5px)' }}
            >
              My Favorite Projects
            </h2>
            <PortfolioGrid />
          </article>
        </div>
      </section>
    </motion.div>
  );
};

export default Resume;
