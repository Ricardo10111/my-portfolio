'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import Link from 'next/link'
import Image from 'next/image'

{
  /* components */
}
import WorkSliderBtns from '@/components/WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'Frontend & Backend',
    title: 'Interactive Branding Website',
    description:
      'Developed an interactive website for digital marketer Angelica Vargas, featuring touch triggers, night/day mode, and visual effects. Upcoming updates include WhatsApp and Telegram messaging integrations. Started on November 15, 2024, and 85% complete.',
    stack: [
      { name: 'React' },
      { name: 'Tailwind' },
      { name: 'JavaScript' },
      { name: 'Next.js' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/thumb1.png',
    live: 'https://avg.lorr.lat/',
    github: 'https://github.com/Ricardo10111/avg-portfolio',
  },
  {
    num: '02',
    category: 'Frontend & Backend',
    title: 'Website Redesign, Dashboard and CRM Integration',
    description:
      'Redesigned the SicaTalento website to improve usability, fix errors, enhance speed, and implement SEO best practices. Currently developing a CRM and analytics dashboard with planned website integrations. With the website 60% complete and the CRM/dashboard at 45%.',
    stack: [
      { name: 'React' },
      { name: 'Tailwind' },
      { name: 'JavaScript' },
      { name: 'Next.js' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: 'https://github.com/Ricardo10111/react-Sica-Talento',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Landing Page Development',
    description:
      'Developed a responsive landing page for ManteniPro with touch triggers, mobile optimization, and seamless CRM integrations using iframes. The project is 100% complete, ensuring smooth functionality and enhanced user experience.',
    stack: [
      { name: 'React' },
      { name: 'Tailwind' },
      { name: 'JavaScript' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/thumb3.png',
    live: 'https://mi-repositorio-omega.vercel.app/',
    github: 'https://github.com/Ricardo10111/landing-mantenipro',
  },
  {
    num: '04',
    category: 'Frontend & Backend',
    title: 'Blog Site Development',
    description:
      "Designed and developed a comprehensive blog site with user-friendly features, including user account creation, multiple sections, and forms for adding and editing posts with images. Users can react to their own and others' posts, fostering engagement and interaction.",
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb4.png',
    live: 'https://devto.lorr.lat/',
    github: 'https://github.com/Ricardo10111/Devto_challenge_react',
  },
  {
    num: '05',
    category: 'Frontend & Backend',
    title: 'CRM Development and Integration',
    description:
      'Developing a CRM system for ManteniPro with seamless integration to the landing page and a mobile app. The project focuses on efficient functionality and connectivity, with CRM system development at 30% and ongoing progress toward enhancing the overall ecosystem.',
    stack: [
      { name: 'React' },
      { name: 'Tailwind' },
      { name: 'JavaScript' },
      { name: 'Next.js' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/thumb5.png',
    live: '',
    github: 'https://github.com/Mantenipro/ManteniPro-Dashboard',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentSlide = swiper.activeIndex
    // update project state based on the current slide index
    setProject(projects[currentSlide])
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* category */}
              <h2 className='text-[42px] font-bold leading-none text-secondary group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category}
              </h2>
              {/* title */}
              <h3 className='text-[20px] font-semibold leading-none text-secondary group-hover:text-accent transition-all duration-500 capitalize'>
                {project.title}
              </h3>
              {/* description */}
              <p className='text-black/60 text-[16px]'>{project.description}</p>
              {/* stack */}
              <ul className='flex flex-col xl:flex-row gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/* remove the las coma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className='border border-secondary'></div>
              {/* btns */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                {project.live ? (
                  <Link
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-secondary flex justify-center items-center group'>
                          <BsArrowUpRight className='text-primary text-3xl group-hover:text-[#d4f4f9]' />
                        </TooltipTrigger>
                        <TooltipContent>
                          {project.live ? (
                            <p>Live project</p>
                          ) : (
                            <p>Coming soon</p>
                          )}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className='w-[70px] h-[70px] rounded-full bg-secondary flex justify-center items-center group opacity-50 cursor-not-allowed'>
                    <BsArrowUpRight className='text-primary text-3xl' />
                  </div>
                )}

                {/* github project button */}
                {project.github ? (
                  <Link
                    href={project.github ? project.github : '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-secondary flex justify-center items-center group'>
                          <BsGithub className='text-primary text-3xl group-hover:text-[#d4f4f9]' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className='w-[70px] h-[70px] rounded-full bg-secondary flex justify-center items-center group opacity-50 cursor-not-allowed'>
                    <BsGithub className='text-primary text-3xl' />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* pagination buttons */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-secondary hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all duration-500'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
