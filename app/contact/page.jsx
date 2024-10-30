'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

// conexion a la API

import { createInfo } from '@/lib/api'
import { useForm, setValue } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation'

// importar componentes de select
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 480 919 5726',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'ric.alberto1m@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'USA, Queen Creek, Arizona',
  },
]

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    setValue,
  } = useForm()

  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      await createInfo(data)
      reset()
      toast.success("Thank you! I'll be in touch within the next 24 hours")
    } catch (error) {
      toast.error('An error occurred while sending the message')
      setError('email', {
        type: 'manual',
        message: 'An error occurred while sending the message',
      })
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <Toaster
        position='top-right'
        reverseOrder={false}
        richColors
        toastOptions={{
          style: { color: 'accent', height: '80px' },
          className: 'my-toast',
        }}
      />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* contact form */}
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=''
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
            >
              <h3 className='text-4xl text-accent'>Let&apos;s work together</h3>
              <p className='text-white/60'>
                I am available for freelance work. Connect with me via email or
                phone.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='firstname'
                  placeholder='First name'
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                  <span className='text-accent border border-pink-100/15 min-h-8 text-sm flex items-center justify-center'>
                    Your First name is required
                  </span>
                )}
                <Input
                  type='lastname'
                  placeholder='Last name'
                  {...register('lastName', { required: false })}
                />
                <Input
                  type='email'
                  placeholder='Email address'
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className='text-accent border border-pink-100/15 min-h-8 text-sm flex items-center justify-center'>
                    Your email is required
                  </span>
                )}
                <Input
                  type='phone'
                  placeholder='Phone number'
                  {...register('phoneNumber', { required: false })}
                />
              </div>
              {/* select */}
              <Select
                {...register('service', { required: true })}
                onValueChange={(value) => setValue('service', value)} // Usar `setValue` de `react-hook-form`
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value='webDev'>Web Development</SelectItem>
                    <SelectItem value='uxUi'>UX/UI Design</SelectItem>
                    <SelectItem value='seo'>SEO</SelectItem>
                    <SelectItem value='markt'>Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.service && (
                <span className='text-accent border border-pink-100/15 min-h-10 text-sm flex items-center justify-center'>
                  Please give me a service
                </span>
              )}
              <Textarea
                className='h-[200px]'
                placeholder='What project do you have in mind?'
                {...register('textArea', { required: false })}
              />
              {/* button */}
              <Button size='md' className='max-w-40'>
                Send message
              </Button>
            </form>
          </div>
          {/* contact info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
