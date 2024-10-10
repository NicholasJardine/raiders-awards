"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';



export default function Vote(){
        const router = useRouter();
        const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
          router.push('/vote');
          // Your logic here
        };
        const voteRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: voteRef,
          offset: ["start end", "end start"]
        });
      
        const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
      
        return (
          <section
            ref={voteRef}
            className=' pt-8 pb-20 md:pt-5 md:pb-10 bg-[#1D1D1B] overflow-x-clip h-[100vh]'
          >
            
            <div className="container flex flex-col items-center text-center">
                <div className='w-[100%] md:h-[224px] sm:h-[148px] flex items-center justify-center bg-[#3C3C3B] mb-8'>
                <Image
                  src="/raiders-logo.png"
                  alt="rugby Icon"
                  width={200}
                  height={200}
                  className="mr-3 transform translate-y-1 mb-8"
                />
                </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/rugby.svg"
                  alt="rugby Icon"
                  width={40}
                  height={40}
                  className="mr-3 transform translate-y-1"
                />
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text">
                  2024 Awards
                </h1>
              </div>
              
              <h3 className='text-[#FFFFFF] text-2xl sm:text-2xl md:text-3xl mt-4 mb-4'>Vote for your winners</h3>
              <div className='w-[100%] md:h-[224px] sm:h-[40px] flex items-center justify-center bg-[#575756] mb-8'> <p>Select the best first team player</p></div>

              {/* <p className="text-sm sm:text-sm md:text-lg text-[#FFFFFF] tracking-tight mt-6 sm:max-w-[90%] md:max-w-[60%]">
              The Raiders Rugby Club Awards Ceremony will take place on October 20th. Make your pick for the following awards: Best First Team Player, Best Forward, Best Backline Player, Best Forward Coach, Best Backline Coach, Best Conditioning Coach, and Best Team Manager.
              </p>
              <button className='btn bg-[#B2B2B1] w-[40%] rounded-2xl mt-8' onClick={handleClick}>Start Voting</button> */}
            </div>
          </section>
        );
}