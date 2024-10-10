"use client";
import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLego from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLego from '@/assets/logo-apex.png'
import Image from 'next/image'
import {motion} from 'framer-motion'

export const LogoTicker = () => {
  return (

    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div className='flex gap-14 flex-none pr-14' animate={{
          translateX:"-50%",
        }}
        transition={{
          duration:20,
          repeat:Infinity,
          ease:'linear',
          repeatType:'loop',
        }}>
          <Image className='logo-ticker-image' src={acmeLogo} alt='acme logo'/>
          <Image className='logo-ticker-image' src={quantumLogo} alt='quantum logo'/>
          <Image className='logo-ticker-image' src={echoLego } alt='echo logo'/>
          <Image className='logo-ticker-image' src={celestialLogo} alt='celestial logo'/>
          <Image className='logo-ticker-image' src={pulseLogo} alt='pulse logo'/>
          <Image className='logo-ticker-image' src={apexLego } alt='apexL logo'/>


          <Image className='logo-ticker-image' src={acmeLogo} alt='acme logo'/>
          <Image className='logo-ticker-image' src={quantumLogo} alt='quantum logo'/>
          <Image className='logo-ticker-image' src={echoLego } alt='echo logo'/>
          <Image className='logo-ticker-image' src={celestialLogo} alt='celestial logo'/>
          <Image className='logo-ticker-image' src={pulseLogo} alt='pulse logo'/>
          <Image className='logo-ticker-image' src={apexLego } alt='apexL logo'/>
          </motion.div>
        </div>
      </div>

    </div>
  );
};