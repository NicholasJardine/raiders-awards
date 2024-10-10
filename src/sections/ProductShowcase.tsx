"use client"
import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'

import Image from 'next/image';
import {motion,useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';
export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress}=useScroll({
    target: sectionRef,
    offset:['start end','end start']
  });

  const translateY = useTransform(scrollYProgress,[0,1], [150,-150])
  return <section ref={sectionRef} className=' bg-gradient-to-b from-[#ffffff] to [#D2DCFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className="section-heading">

      
      <div className="flex justify-center">
      <p className='tag'>Boost your productivity</p>
      </div>
    <h2 className='section-title mt-5'>A more effective way to track progress</h2>
    <p className='section-description mt-5'>This SaaS template combines modern design with functionality, offering a sleek and professional layout to effectively showcase your service’s features and client relationships. </p>
    </div>
    <div className="relative">
    <Image src={productImage} alt='product image' className='mt-10'></Image>
    <motion.img style={{
      translateY,
    }} src={pyramidImage.src} height={262} width ={262}alt='pyramid image' className='hidden md:block absolute -right-36 -top-32'></motion.img>
    <motion.img style={{
      translateY
    }} src={tubeImage.src} height={248} width={248} alt='tube image' className='hidden md:block absolute bottom-24 -left-36'></motion.img>

    </div>
    </div>

  </section>;
};
