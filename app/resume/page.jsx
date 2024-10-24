'use client'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAngular,
  FaPython,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiBootstrap,
  SiGooglecloud,
  SiAmazonwebservices,
} from 'react-icons/si'

// about data
const about = {
  title: 'About Me',
  description:
    'I am a web developer based in  Arizona. I specialize in building websites that are fast, responsive, and user-friendly. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Ricardo Lopez',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 480 919 5726',
    },
    {
      fieldName: 'Experience',
      fieldValue: '10 years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'ric.alberto1m@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Spanish',
    },
  ],
}
// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'I have over 10 years of experience in web development. I have worked with a variety of clients and projects, ranging from small businesses to large corporations. I specialize in building websites that are fast, responsive, and user-friendly.',
  items: [
    {
      company: 'Sica-Talento',
      position: 'Full Stack Developer',
      duration: '2021 - Present',
    },
    {
      company: 'SONDA',
      position: 'Frontend Developer/ Project Manager',
      duration: '2017 - 2021',
    },
    {
      company: 'Datavision',
      position: 'Sistems Analyst',
      duration: '2014 - 2017',
    },
    {
      company: 'Datavision',
      position: 'Sistems Analyst',
      duration: '2014 - 2017',
    },
    {
      company: 'Datavision',
      position: 'Sistems Analyst',
      duration: '2014 - 2017',
    },
    {
      company: 'Datavision',
      position: 'Sistems Analyst',
      duration: '2014 - 2017',
    },
    {
      company: 'Datavision',
      position: 'Sistems Analyst',
      duration: '2014 - 2017',
    },
  ],
}
// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'I have a Bachelor of Science in Computer Science from the UTEL. I graduated with honors and have been working in the field ever since. I am constantly learning new technologies and improving my skills.',
  items: [
    {
      institution: 'Kodemia',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2024',
    },
    {
      institution: 'UTEL',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2020',
    },
  ],
}
// skills data
const skills = {
  title: 'My Skills',
  description:
    'I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am constantly learning new technologies and improving my skills.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaPython />,
      name: 'Python',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <FaAngular />,
      name: 'Angular',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },

    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiBootstrap />,
      name: 'Bootstrap',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },

    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiGooglecloud />,
      name: 'Google Cloud Platform',
    },
    {
      icon: <SiAmazonwebservices />,
      name: 'AWS',
    },
  ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh]  w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* eduaction */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-500'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume