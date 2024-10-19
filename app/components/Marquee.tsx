import { CardTitle } from '@/components/ui/card'
import React from 'react'
import { Stacks } from './Stacks'


const Marquee = () => {
  return (
    <div className='w-full flex justify-center items-center text-center mt-[8%] flex-col'>
         <CardTitle className='uppercase font-normal text-gray-700 text-sm  '>Trusted by 25,000+ companies from startups to enterprise</CardTitle>
         <Stacks/>
    </div>
  )
}

export default Marquee