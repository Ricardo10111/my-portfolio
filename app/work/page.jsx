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

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'project 1',
    description: 'This is my first project when I started learning frontend.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'JavaScript' }],
    image: '/images/project-1.jpg',
  },
]

const Work = () => {
  return <div>work page</div>
}

export default Work
