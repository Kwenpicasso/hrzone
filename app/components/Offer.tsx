import BlurFade from '@/components/ui/blur-fade'
import { Card, CardTitle } from '@/components/ui/card'
import Icon from '../images/a.svg'
import Icon1 from '../images/aa.svg'
import Icon2 from '../images/aaa.svg'
import Icon3 from '../images/b.svg'
import Icon4 from '../images/bb.svg'
import Icon5 from '../images/bbb.svg'
import React from 'react'
import Image from 'next/image'


const Offer = () => {
    const card = [
        {
            title: 'Powerful reporting',
            desc: ' Unlock unrivalled insights into spending and performance with compensation, OKRs, equity and more for your team in one system.',
            img : Icon
        },
        {
            title: 'Scalability',
            desc: 'From contractors and EOR to payroll and PEO, Deel’s the only platform that can evolve with every stage of your company’s growth.',
            img : Icon1
        },
        {
            title: 'Dedicated support',
            desc: 'We don’t rely on third parties, which means you’ll get a single dedicated POC to work alongside with and guaranteed 1.25 min FRT.',
            img : Icon2
        },
        {
            title: 'Trusted partner',
            desc: 'Engage with one partner for your global growth.From M&As to entity set up, partner with our in-house team for all your expansion needs. ',
            img : Icon3
        },
        {
            title: 'Seamless integration',
            desc: 'Eliminate data silos and reduce manual work with 100+ integrations across your entire tech stack, from accounting to expenses.',
            img : Icon4
        },
        {
            title: 'Unrivalled security',
            desc: 'Connect your company in a single secure platform. Our platform is GDPR, SOC2, and ISO 27001 compliant.',
            img : Icon5
        },
    ]
  return (
    <div className='w-full flex justify-center items-center flex-col px-[4%] mt-[4%] '>
           <BlurFade delay={0.8} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
        What we offer
        </h2>
      </BlurFade>
            <BlurFade delay={0.5 * 2} inView>
        <h3 className=" mt-3 text-center w-full lg:w-[60%] mx-auto tracking-tighter text-base font-normal ">
        DeelTalent was created by and for HR and HR Tech Marketing professionals looking to change the culture of work — and to elevate your brand among organizations that share in this mission. We’re here to help you set yourself apart in the crowded HR Technology space. We connect you with the right audiences, faster, and firmly establish your brand expertise and credibility to carry you over the finish line with decision-makers in this crowded space. We’re on a mission to inspire meaningful human connection at work.
        </h3>
      </BlurFade>
   <div className="w-full flex flex-wrap md:flex-row lg:flex-row flex-col justify-between items-center gap-2 mt-4">
  {card.map((item) => (
     <Card className=' sm:w-full md:w-[31%] lg:w-[30%] md:h-[250px] h-[210px] lg:h-[210px]  p-4' key={item.title}>
     <Image src={item.img} alt='icon' className='w-[90px] h-[90px]'/>
     <CardTitle className='font-medium text-base'>{item.title}</CardTitle>
     <CardTitle className='text-sm font-normal'>
   {item.desc}
     </CardTitle>
    </Card>
  ))}
  
   </div>
  
</div>
  )
}

export default Offer