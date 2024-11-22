import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Link from 'next/link'

// components
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Full Stack Developer</span>
            <h1 className='h1 mb-6'>
              Hello I&apos;m <br />{' '}
              <span className='text-[#1a7da0]'>Ricardo Lopez</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-[#1f546b]'>
              Full Stack Developer with 3+ years in web development and over a
              decade in IT, skilled in JavaScript, React, Angular, Node.js,
              MongoDB, and more. Passionate about continuous learning and
              sharing knowledge to empower others.
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a
                href='/assets/resume/Ricardo_CV_Eng_v8.pdf'
                target='_blank' // Abre en una nueva pestaña
                rel='noopener noreferrer' // Seguridad adicional
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2'
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
