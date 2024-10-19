import { CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import Heroimg from '../images/img3.png'
import ShimmerButton from '@/components/ui/shimmer-button'
import BlurFade from '@/components/ui/blur-fade'

const Hero = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center pt-[10%] lg:pt-[8%]'>
    <BlurFade delay={0.5} inView>
    <CardTitle className='text-3xl md:text-5xl lg:text-6xl font-bold text-black bg-blue-300 p-2 rounded-md'>Hiring!</CardTitle> 
    </BlurFade>
  <BlurFade delay={0.2 * 2} inView>
  <CardTitle className='text-2xl md:text-4xl lg:text-5xl font-bold text-black mt-0'>for global teams</CardTitle>
  </BlurFade>
<BlurFade delay={0.2} inView>
<CardTitle className='text-md font-light w-full px-2 lg:w-[50%] md:w-[80%] mx-auto text-center text-gray-600 mt-2 z-50'>Deel helps tens of thousands of companies expand globally with unmatched speed, flexibility and compliance. Get our all-in-one Global People Platform that simplifies the way you onboard, offboard, and everything else in between.</CardTitle>
</BlurFade>
  <BlurFade delay={0.1}>
  <ShimmerButton className="shadow-2xl mt-8">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
         Get Started
        </span>
      </ShimmerButton>
  </BlurFade>
    <Image src={Heroimg} alt='hero' className='w-full lg:w-[80%] cover mt-[5%] lg:mt-0'/>
     <svg
              className="absolute mt-80 blur-3xl z-[-10]"
              fill="none"
              viewBox="0 0 400 400"
              height="80%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path
                    d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                    fill="#03FFE0"
                  ></path>
                  <path
                    d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                    fill="#7C87F8"
                  ></path>
                  <path
                    d="M320 400H400V78.75L106.2 134.75L320 400Z"
                    fill="#4C65E4"
                  ></path>
                  <path
                    d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                    fill="#043AFF"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="720.666"
                  id="filter0_f_10_20"
                  width="720.666"
                  x="-160.333"
                  y="-160.333"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_10_20"
                    stdDeviation="80.1666"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
           
    </div>
  )
}

export default Hero