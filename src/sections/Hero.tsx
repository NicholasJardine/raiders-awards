
// "use client";
// import ArrowIcon from '@/assets/arrow-right.svg'
// import cogImage from '@/assets/cog.png'

// import cylinderImage from '@/assets/cylinder.png'
// import noodleImage from '@/assets/noodle.png'

// import Image from 'next/image';
// import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion'
// import { useRef } from 'react';
// import LottieAnimation from '@/components/waves';
// import ServicesGrid from '@/components/services_grid';
// export const Hero = () => {
//   const heroRef = useRef(null);
//   const {scrollYProgress} = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"]
//   });

//   const translateY = useTransform(scrollYProgress, [0,1], [150,-150]);

//   return (

//     <section ref={heroRef} className='mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-[#1D1D1B] overflow-x-clip'>
//       <div className="container">
//         <div className='md:flex flex-col items-center'>
//           <div className="flex"> 

            
//           </div>
//         <Image src="/rugby.svg" alt="rugby Icon" width={40} height={40} />

//         <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text mt-8 ">Raiders Awards</h1>        <div className='md:w-[65%] md:mr-16 text-center'> 

//           <h3 className='text-[#FFFFFF] text-3xl mt-4'>Vote for your winners</h3>
//         {/* <div className="tag">Version 2.0 is here</div> */}
//         {/* <p className="text-xl text-[#010D3E] tracking-tight mt-6">At BluWave, we offer a comprehensive range of tech services tailored to your needs. Whether it's cloud-based mobile and web applications or advanced data science solutions, we provide everything you need to innovate and grow your business—all in one place.</p> */}
//           <p className="text-lg text-[#FFFFFF] tracking-tight mt-6">
          
// The Raiders Rugby Club Awards Ceremony will take place on October 20th. Make your pick for the following awards: Best First Team Player, Best Forward, Best Backline Player, Best Forward Coach, Best Backline Coach, Best Conditioning Coach, and Best Team Manager.</p>
//         <button className='btn bg-[#B2B2B1] w-[40%] rounded-2xl mt-8'>Start Voting</button>
//         {/* <div className="flex gap-1 items-center mt-[30px]">
//           <button className="btn btn-primary">Pricing</button>
//           <button className="btn btn-text gap-1"><span>Learn More</span> <ArrowIcon className='h-5 w-5'/></button>
//         </div> */}
//         </div>
//         {/* <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
//         <ServicesGrid/> */}

//       {/* <motion.img src = {cogImage.src} alt ='cog' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
//       animate={{
//         translateY:[-30,30],
//       }}
      
//       transition={{
//         repeat:Infinity,
//         repeatType: "mirror",
//         duration: 3,
//         ease:'easeInOut'
//       }}/>
//       <motion.img style={{
//         translateY:translateY
//       }}src={cylinderImage.src} alt = 'cylinder Image' width={220} height={220} className='hidden md:block -top-8 -left-32 md:absolute'/>
//       <motion.img style={{
//         translateY:translateY,
//         rotate:30,
//       }} src={noodleImage.src} alt = 'noodle Image' width={220}  className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'/> */}

//       {/* </div> */}
//       </div> 
//       </div>
//     </section>
//   );
// };


// "use client";
// import ArrowIcon from '@/assets/arrow-right.svg';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { useRouter } from 'next/navigation';


// export const Hero = () => {
//   const router = useRouter();
//   const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
//     router.push('/vote');
//     // Your logic here
//   };
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"]
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section
//       ref={heroRef}
//       className='mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-[#1D1D1B] overflow-x-clip h-[100vh]'
//     >
//       <div className="container flex flex-col items-center text-center">
//       <Image
//             src="/raiders-logo.png"
//             alt="rugby Icon"
//             width={156}
//             height={156}
//             className="mr-3 transform translate-y-1 mb-8"
//           />
//         <div className="flex items-center justify-center">
//           <Image
//             src="/rugby.svg"
//             alt="rugby Icon"
//             width={40}
//             height={40}
//             className="mr-3 transform translate-y-1"
//           />
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text">
//             2024 Awards
//           </h1>
//         </div>
        
//         <h3 className='text-[#FFFFFF] text-2xl sm:text-2xl md:text-3xl mt-4'>Vote for your winners</h3>
//         <p className="text-sm sm:text-sm md:text-lg text-[#FFFFFF] tracking-tight mt-6 sm:max-w-[90%] md:max-w-[60%]">
//         The Raiders Rugby Club Awards Ceremony will take place on October 20th. Make your pick for the following awards: Best First Team Player, Best Forward, Best Backline Player, Best Forward Coach, Best Backline Coach, Best Conditioning Coach, and Best Team Manager.
//         </p>
//         <button className='btn bg-[#B2B2B1] w-[40%] rounded-2xl mt-8' onClick={handleClick}>Start Voting</button>
//       </div>
//     </section>
//   );
// };


"use client"; // Ensure this is a client-side component

import { useRouter } from 'next/navigation';
import useSessionId from '@/hooks/useSessionId'
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const router = useRouter();

  // Call the useSessionId hook to generate or retrieve the session ID
  useSessionId(); 

  const handleClick = () => {
    router.push('/vote');
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className='mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-[#1D1D1B] overflow-x-clip h-[100vh]'
    >
      <div className="container flex flex-col items-center text-center">
        <Image
          src="/raiders-logo.png"
          alt="rugby Icon"
          width={156}
          height={156}
          className="mr-3 transform translate-y-1 mb-8"
        />
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
        
        <h3 className='text-[#FFFFFF] text-2xl sm:text-2xl md:text-3xl mt-4'>Vote for your winners</h3>
        <p className="text-sm sm:text-sm md:text-lg text-[#FFFFFF] tracking-tight mt-6 sm:max-w-[90%] md:max-w-[60%]">
        The Raiders Rugby Club Awards Ceremony will take place on October 20th. Make your pick for the following awards: Best First Team Player, Best Forward, Best Backline Player, Best Forward Coach, Best Backline Coach, Best Conditioning Coach, and Best Team Manager.
        </p>
        <button className='btn bg-[#B2B2B1] w-[40%] rounded-2xl mt-8' onClick={handleClick}>Start Voting</button>
      </div>
    </section>
  );
};
