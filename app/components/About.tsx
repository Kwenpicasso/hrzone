import React from 'react';
import Image from 'next/image';
import Gen from '../images/hrr.jpg';
import Gen1 from '../images/hr.jpg';
import Gen2 from '../images/r.jpg';
import Gen3 from '../images/rr.jpg';
import Gen4 from '../images/rrrr.jpg';
import Gen5 from '../images/rrr.jpg';
import { CardTitle } from '@/components/ui/card';
import BlurFade from '@/components/ui/blur-fade';
import ShimmerButton from '@/components/ui/shimmer-button';

const About = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-between items-center lg:items-start px-[4%] mt-[4%] gap-6'>
            <div className="w-full lg:w-1/2 space-y-3 pt-[5%] ">
                <CardTitle className='text-md font-medium text-gray-700 text-center lg:text-start'>
                    WANT TO KNOW MORE ABOUT US?
                </CardTitle>
                <CardTitle className='text-3xl lg:text-4xl font-semibold  text-center lg:text-start w-full lg:w-[60%]'>
                    Scale globally with velocity and ease
                </CardTitle>
                <CardTitle className='text-sm lg:text-base font-light w-full text-center lg:text-start md:w-[80%] mx-auto lg:w-[70%] text-gray-500'>
                    DeelTalent is built to scale with organizations of all sizes, from small teams to enterprises of thousands. Whether you want to hire worldwide without opening legal entities, streamline HR for your global team, or pay all types of workers anywhere with consolidated payroll—Deel does it all with full compliance.
                </CardTitle>
                <ShimmerButton className="shadow-2xl mt-8 w-[50%] lg:mx-0 mx-auto">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
         Get Started
        </span>
      </ShimmerButton>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <section id="photos">
                    <div className="columns-2 gap-4 sm:columns-3">
                      
                        {/* Additional images from the project */}
                     
                        <BlurFade delay={0.3} inView>
                            <Image
                                className="mb-4 rounded-lg object-contain"
                                src={Gen4}
                                alt="Gen image 2"
                                width={600}
                                height={800}
                            />
                        </BlurFade>
                        <BlurFade delay={0.1} inView>
                            <Image
                                className="mb-4 rounded-lg object-contain w-full"
                                src={Gen}
                                alt="Gen image 1"
                                width={800}
                                height={600}
                            />
                        </BlurFade>
                        <BlurFade delay={0.2} inView>
                            <Image
                                className="mb-4 rounded-lg object-contain"
                                src={Gen1}
                                alt="Gen image 2"
                                width={600}
                                height={800}
                            />
                        </BlurFade>
                        
                        <BlurFade delay={0.2} inView>
                            <Image
                                className="mb-4 rounded-lg object-contain"
                                src={Gen2}
                                alt="Gen image 2"
                                width={600}
                                height={800}
                            />
                        </BlurFade>
                        <BlurFade delay={0.5} inView>
                            <Image
                                className="mb-4 rounded-lg object-contain"
                                src={Gen5}
                                alt="Gen image 2"
                                width={600}
                                height={800}
                            />
                        </BlurFade>
                        <BlurFade delay={0.2} inView>
                            <Image
                                className="mb-4 rounded-lg object-contain"
                                src={Gen3}
                                alt="Gen image 2"
                                width={600}
                                height={800}
                            />
                        </BlurFade>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
